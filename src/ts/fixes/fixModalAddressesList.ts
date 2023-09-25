import {Address} from "../../types/address.ts";

export const fixModalAddressesList = (type: Address['type']) => {
	const modalAddresses = document.querySelectorAll<HTMLDivElement>('[data-address-type]');
	modalAddresses.forEach((address) => {
		const addressType = address.dataset['addressType'] ?? '';

		if (type === addressType) {
			address.classList.remove('hide');
		} else {
			address.classList.add('hide');
		}
	});
};
