import {Address} from "../../types/address.ts";
import {store} from "../../store/store.ts";
import {closeModal} from "./modals.ts";
import {fixModalAddressesList} from "../fixes/fixModalAddressesList.ts";

const selectDeliveryMethod = () => {
	const modalTabs = document.querySelectorAll<HTMLButtonElement>('[data-modal-tab]');
	modalTabs.forEach((tab) => {
		const type = (tab.dataset['modalTab'] ?? 'user') as Address['type'];

		tab.addEventListener('click', () => {
			modalTabs.forEach((element) => {
				if (element === tab) {
					element.classList.add('tabs__tab_active');
				} else {
					element.classList.remove('tabs__tab_active');
				}
			});

			fixModalAddressesList(type);
		});
	});
};

export const selectAddress = () => {
	const addressForm: HTMLFormElement = document.querySelector('[data-modal="address"] .addressForm')!;
	addressForm.addEventListener('submit', (event) => {
		event.preventDefault();

		const formData = new FormData(addressForm);
		const formProps = Object.fromEntries(formData) as { address: string };

		store.setSelectedAddress(formProps.address);
		closeModal(addressForm);
	});

	selectDeliveryMethod();
};
