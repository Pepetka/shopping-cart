import {userAddresses} from "../../consts/userAddresses.ts";
import {userAddressBase} from "../templates/userAddressBase.ts";

export const renderUserAddressModal = (selectedAddress: string) => {
	const modalTabs = document.querySelectorAll<HTMLButtonElement>('[data-modal-tab]');
	const modalAddress: HTMLDivElement = document.querySelector('.addressForm__addressesWrapper')!;
	const selectedType = userAddresses.find((el) => el.id === selectedAddress)!.type;

	modalTabs.forEach((tab) => {
		const type = tab.dataset['modalTab'] ?? '';

		if (selectedType === type) {
			tab.classList.add('tabs__tab_active');
		} else {
			tab.classList.remove('tabs__tab_active');
		}
	});

	modalAddress.innerHTML = userAddresses
		.reduce((acc, address) => acc + `
			<div data-delete-address="${address.id}" data-address-type="${address.type}" class="modal__line ${selectedType !==
			 address.type ? 'hide' : ''}">
				<label class="radio addressForm__radio">
					<input type="radio" value="${address.id}" name="address" ${address.id === selectedAddress ? 'checked' : ''}>
					${userAddressBase(address, '', 'addressForm__rating', 'Пункт выдачи')}
				</label>
				
				<button data-delete-address="${address.id}" type="button"></button>
			</div>
		`, ``);
};
