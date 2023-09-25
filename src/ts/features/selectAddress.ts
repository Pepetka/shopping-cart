import {Address} from "../../types/address.ts";
import {store} from "../../store/store.ts";
import {closeModal} from "./modals.ts";

export const selectAddress = () => {
	const modalTabs = document.querySelectorAll<HTMLButtonElement>('[data-modal-tab]');
	modalTabs.forEach((tab) => {
		const type = (tab.dataset['modalTab'] ?? 'user') as Address['type'];

		tab.addEventListener('click', () => {
			const modalAddresses = document.querySelectorAll<HTMLDivElement>('[data-address-type]');
			modalTabs.forEach((element) => {
				if (element === tab) {
					element.classList.add('tabs__tab_active');
				} else {
					element.classList.remove('tabs__tab_active');
				}
			});

			modalAddresses.forEach((address) => {
				const addressType = address.dataset['addressType'] ?? '';

				if (type === addressType) {
					address.classList.remove('hide');
				} else {
					address.classList.add('hide');
				}
			});
		});
	});

	const addressForm: HTMLFormElement = document.querySelector('[data-modal="address"] .addressForm')!;
	addressForm.addEventListener('submit', (event) => {
		event.preventDefault();

		const formData = new FormData(addressForm);
		const formProps = Object.fromEntries(formData) as { address: string };

		store.setSelectedAddress(formProps.address);
		closeModal(addressForm, { selectedAddress: store.selectedAddress });
	});
};
