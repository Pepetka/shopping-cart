import {store} from "../../store/store.ts";

export const deleteAddress = () => {
	const modalAddresses = document.querySelectorAll<HTMLDivElement>('.modal__line[data-delete-address]');

	modalAddresses.forEach((addressElement) => {
		const deleteBtn: HTMLButtonElement = addressElement.querySelector('button[data-delete-address]')!;
		const id = deleteBtn.dataset['deleteAddress'] ?? '';
		const type = addressElement.dataset['addressType'] ?? '';

		deleteBtn.addEventListener('click', () => {
			addressElement.remove();
			store.removeAddress(id);

			const newSelectedAddress = store.addresses.filter((address) => address.type === type);

			modalAddresses.forEach((addressEl) => {
				const id = addressEl.dataset['deleteAddress'] ?? '';
				const input = addressEl.querySelector('input')!;
				input.checked = id === newSelectedAddress[0].id;
			});

			const addressesNum = store.addresses.filter((address) => address.type === type).length;
			if (addressesNum === 1) {
				const deleteBtn: HTMLDivElement = document.querySelector(`[data-address-type="${type}"] > button`)!;

				deleteBtn.classList.add('hide');
			}
		});
	});
};
