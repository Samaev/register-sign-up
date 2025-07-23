import { describe, it, expect } from 'vitest'
import { useSignupValidation } from '../composables/useSignupValidation'

describe('useSignupValidation', () => {
    const {
        validateEmail,
        validateLength,
        hasUpperCase,
        hasLowerCase,
        hasDigit,
        emailContainsPassword,
        validateStrongPassword
    } = useSignupValidation()

    describe('validateEmail', () => {
        it('returns true for valid emails', () => {
            expect(validateEmail('test@example.com')).toBe(true)
            expect(validateEmail('user.name+tag+sorting@example.com')).toBe(true)
        })

        it('returns false for invalid emails', () => {
            expect(validateEmail('invalid-email')).toBe(false)
            expect(validateEmail('user@.com')).toBe(false)
        })
    })

    describe('validateLength', () => {
        it('returns true for length between 8 and 64', () => {
            expect(validateLength('12345678')).toBe(true)
            expect(validateLength('a'.repeat(64))).toBe(true)
        })

        it('returns false for invalid lengths', () => {
            expect(validateLength('1234567')).toBe(false)
            expect(validateLength('a'.repeat(65))).toBe(false)
        })
    })

    describe('hasUpperCase', () => {
        it('returns true if contains uppercase', () => {
            expect(hasUpperCase('Password')).toBe(true)
        })

        it('returns false if no uppercase', () => {
            expect(hasUpperCase('password')).toBe(false)
        })
    })

    describe('hasLowerCase', () => {
        it('returns true if contains lowercase', () => {
            expect(hasLowerCase('PASSWORDa')).toBe(true)
        })

        it('returns false if no lowercase', () => {
            expect(hasLowerCase('PASSWORD')).toBe(false)
        })
    })

    describe('hasDigit', () => {
        it('returns true if contains digit', () => {
            expect(hasDigit('pass123')).toBe(true)
        })

        it('returns false if no digit', () => {
            expect(hasDigit('password')).toBe(false)
        })
    })

    describe('emailContainsPassword', () => {
        it('returns true if email includes password', () => {
            expect(emailContainsPassword('test', 'mytest@example.com')).toBe(true)
        })

        it('returns false otherwise', () => {
            expect(emailContainsPassword('securepass', 'mytest@example.com')).toBe(false)
        })
    })

    describe('validateStrongPassword', () => {
        it('returns true for valid strong password', () => {
            expect(validateStrongPassword('StrongPass1')).toBe(true)
        })

        it('returns false for weak passwords', () => {
            expect(validateStrongPassword('weak')).toBe(false)
            expect(validateStrongPassword('nouppercase1')).toBe(false)
            expect(validateStrongPassword('NOLOWERCASE1')).toBe(false)
            expect(validateStrongPassword('NoDigit')).toBe(false)
        })
    })
})