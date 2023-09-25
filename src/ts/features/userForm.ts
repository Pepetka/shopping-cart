import {store} from "../../store/store.ts";
import {validationError} from "./validationError.ts";

const numberFormatted = (input: HTMLInputElement) => {
	const inputValue = input.value.trim();
	if (inputValue === '') return;

	const numericValue = inputValue.replace(/\D/g, "");

	const formattedValue = `+${numericValue.substring(0, 1)} ${numericValue.substring(1, 4)} ${numericValue.substring(4, 7)} ${numericValue.substring(7, 9)} ${numericValue.substring(9, 11)}`;

	input.value = formattedValue.trim();
};

export const userForm = () => {
	const inputBlocks = document.querySelectorAll<HTMLDivElement>('[data-form-block]');

	inputBlocks.forEach((block) => {
		const input = block.querySelector('input')!;

		input.addEventListener('input', () => {
			if (block.dataset['formBlock'] === 'phone') {
				numberFormatted(input);
			}

			store.setUserData(input.name, input.value);
		});

		input.addEventListener('blur', () => {
			const errors = store.validationErrors;
			validationError(block, errors);
		});
	});
};
