import {INNValidationError} from "../../types/validationErrors.ts";

export const validateINN = (input: string, withEmptyError = true): INNValidationError | null => {
	if (input.trim() === '' && withEmptyError) return INNValidationError.EMPTY;
	if (input.trim() === '' && !withEmptyError) return null;

	return /^\d{14}$/.test(input) ? null : INNValidationError.WRONG;
};
