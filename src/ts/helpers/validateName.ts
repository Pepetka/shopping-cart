import {NameValidationError} from "../../types/validationErrors.ts";

export const validateName = (input: string, withEmptyError = true): NameValidationError | null => {
	if (input.trim() === '' && withEmptyError) return NameValidationError.EMPTY;
	if (input.trim() === '' && !withEmptyError) return null;

	const russianAlphabet = /^[а-яА-ЯёЁ]+$/;
	return russianAlphabet.test(input) ? null : NameValidationError.WRONG;
}
