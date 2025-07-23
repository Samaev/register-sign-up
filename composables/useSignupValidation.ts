export function useSignupValidation() {
    function validateEmail(email: string): boolean {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    function validateLength(password: string): boolean {
        return password.length >= 8 && password.length <= 64
    }

    function hasUpperCase(password: string): boolean {
        return /[A-Z]/.test(password)
    }

    function hasLowerCase(password: string): boolean {
        return /[a-z]/.test(password)
    }

    function hasDigit(password: string): boolean {
        return /\d/.test(password)
    }

    function emailContainsPassword(password: string, email: string): boolean {
        return !!email && !!password && email.toLowerCase().includes(password.toLowerCase())
    }

    function validateStrongPassword(password: string): boolean {
        return (
            validateLength(password) &&
            hasUpperCase(password) &&
            hasLowerCase(password) &&
            hasDigit(password)
        )
    }

    return {
        validateEmail,
        validateLength,
        hasUpperCase,
        hasLowerCase,
        hasDigit,
        emailContainsPassword,
        validateStrongPassword
    }
}
