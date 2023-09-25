import {PhoneValidationError} from "../../types/validationErrors.ts";

export const validatePhoneNumber = (phoneNumber: string, withEmptyError = true): PhoneValidationError | null => {
	if (phoneNumber.trim() === '' && withEmptyError) return PhoneValidationError.EMPTY;
	if (phoneNumber.trim() === '' && !withEmptyError) return null;

	const phoneRegex = /^\+\d\s\d{3}\s\d{3}\s\d{2}\s\d{2}$/;
	return phoneRegex.test(phoneNumber) ? null : PhoneValidationError.WRONG;
};
