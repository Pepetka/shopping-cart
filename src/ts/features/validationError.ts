import {UserData} from "../../types/userData.ts";
import {ValidationsError} from "../../types/validationErrors.ts";

export const validationError = (block: HTMLDivElement, errors: ValidationsError) => {
	const field = (block.dataset['formBlock']!) as keyof UserData;
	const formErrorElement: HTMLDivElement = block.querySelector('.form__error')!;

	if (errors[field]) {
		block.classList.add('form__block_error');
		formErrorElement.textContent = errors[field];
		return;
	}

	if (field === 'INN') {
		formErrorElement.textContent = 'Для таможенного оформления';
	} else {
		formErrorElement.textContent = '';
	}
	block.classList.remove('form__block_error');
};
