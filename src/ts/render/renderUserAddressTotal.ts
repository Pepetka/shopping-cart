import {userAddressBase} from "../templates/userAddressBase.ts";
import {userAddresses} from "../../consts/userAddresses.ts";

export const renderUserAddressTotal = (selectedAddress: string) => {
	const totalAddress: HTMLDivElement = document.querySelector('.delivery__address')!;
	totalAddress.innerHTML = userAddressBase(userAddresses.find((el) => el.id === selectedAddress)!);

	const deliveryName: HTMLDivElement = document.querySelector('.delivery__name')!;
	deliveryName.textContent = userAddresses.find((el) => el.id === selectedAddress)!.type === 'point' ?
		'Доставка в пункт выдачи' :
		'Доставка курьером';
};
