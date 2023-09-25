import {SurnameValidationError} from "../../types/validationErrors.ts";

export const validateSurname = (input: string, withEmptyError = true): SurnameValidationError | null => {
	if (input.trim() === '' && withEmptyError) return SurnameValidationError.EMPTY;
	if (input.trim() === '' && !withEmptyError) return null;

	const russianAlphabet = /^[а-яА-ЯёЁ]+$/;
	return russianAlphabet.test(input) ? null : SurnameValidationError.WRONG;
}
