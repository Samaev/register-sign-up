export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const { email, password, updatesApproved } = body || {}

    if (!email || !password) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'Email and password are required'
        }))
    }

    await new Promise((resolve) => setTimeout(resolve, 300))

    return {
        success: true,
        message: 'Signup successful'
    }
})