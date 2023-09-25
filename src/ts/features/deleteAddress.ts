import {store} from "../../store/store.ts";

export const deleteAddress = () => {
	const modalAddresses = document.querySelectorAll<HTMLDivElement>('.modal__line[data-delete-address]');

	modalAddresses.forEach((addressElement) => {
		const deleteBtn: HTMLButtonElement = addressElement.querySelector('button[data-delete-address]')!;
		const id = deleteBtn.dataset['deleteAddress'] ?? '';

		deleteBtn.addEventListener('click', () => {
			addressElement.remove();
			store.removeAddress(id);
		});
	});
};
