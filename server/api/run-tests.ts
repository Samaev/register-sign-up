import { exec } from 'child_process'

export default defineEventHandler(async () => {
    return new Promise((resolve, reject) => {
        exec('npx vitest run --reporter=json --silent', (err, stdout, stderr) => {
            if (err) {
                console.error('[Test Error]', stderr)
                return reject(createError({
                    statusCode: 500,
                    statusMessage: 'Test run failed'
                }))
            }

            try {
                // 🔍 Найти последнюю валидную JSON строку
                const lines = stdout.trim().split('\n')
                const jsonLine = lines.reverse().find((line) => {
                    try {
                        JSON.parse(line)
                        return true
                    } catch {
                        return false
                    }
                })

                if (!jsonLine) throw new Error('No valid JSON output found')

                const parsed = JSON.parse(jsonLine)

                const summary = {
                    duration: parsed.startTime && parsed.success !== undefined ? `${parsed.success ? parsed.testResults.reduce((acc: number, t: any) => acc + t.endTime - t.startTime, 0) : 'Unknown'}ms` : 'Unknown',
                }

                const testDetails = parsed.testResults.map((test: any) => ({
                    file: test.name?.split(/[\\/]/).pop() ?? 'unknown',
                    passed: test.assertionResults.filter((r: any) => r.status === 'passed').length,
                    failed: test.assertionResults.filter((r: any) => r.status === 'failed').length,
                    skipped: test.assertionResults.filter((r: any) => r.status === 'skipped').length
                }))

                resolve({ summary, testDetails })
            } catch (e) {
                console.error('[Parse Error]', e)
                reject(createError({
                    statusCode: 500,
                    statusMessage: 'Failed to parse test output'
                }))
            }
        })
    })
})
