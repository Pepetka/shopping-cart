import {userAddressBase} from "../templates/userAddressBase.ts";
import {userAddresses} from "../../const/userAddresses.ts";
import {store} from "../../store/store.ts";

export const renderUserAddressTotal = () => {
	const totalAddress: HTMLDivElement = document.querySelector('.delivery__address')!;
	totalAddress.innerHTML = userAddressBase(userAddresses.find((el) => el.id === store.selectedAddress)!);

	const deliveryName: HTMLDivElement = document.querySelector('.delivery__name')!;
	deliveryName.textContent = userAddresses.find((el) => el.id === store.selectedAddress)!.type === 'point' ?
		'Доставка в пункт выдачи' :
		'Доставка курьером';
};
