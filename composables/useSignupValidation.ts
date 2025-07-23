/**
 * Provides helper functions for validating signup form fields.
 */
export function useSignupValidation() {
    /**
     * Validates email format.
     * @param email - The email to validate.
     * @returns True if valid, false otherwise.
     */
    function validateEmail(email: string): boolean {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    /**
     * Validates password length.
     * @param password - The password to check.
     * @returns True if length is between 8 and 64 characters.
     */
    function validateLength(password: string): boolean {
        return password.length >= 8 && password.length <= 64
    }

    /**
     * Checks if password includes an uppercase letter.
     */
    function hasUpperCase(password: string): boolean {
        return /[A-Z]/.test(password)
    }

    /**
     * Checks if password includes a lowercase letter.
     */
    function hasLowerCase(password: string): boolean {
        return /[a-z]/.test(password)
    }

    /**
     * Checks if password includes at least one digit.
     */
    function hasDigit(password: string): boolean {
        return /\d/.test(password)
    }

    /**
     * Checks if the email contains the password (insecure).
     */
    function emailContainsPassword(password: string, email: string): boolean {
        return !!email && !!password && email.toLowerCase().includes(password.toLowerCase())
    }

    /**
     * Validates if the password is strong (length, uppercase, lowercase, digit).
     */
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
