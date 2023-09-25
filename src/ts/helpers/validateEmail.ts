import {EmailValidationError} from "../../types/validationErrors.ts";

export const validateEmail = (email: string, withEmptyError = true): EmailValidationError | null => {
	if (email.trim() === '' && withEmptyError) return EmailValidationError.EMPTY;
	if (email.trim() === '' && !withEmptyError) return null;

	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return emailRegex.test(email) ? null : EmailValidationError.WRONG;
};
