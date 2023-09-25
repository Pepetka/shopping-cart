import {userAddressBase} from "../templates/userAddressBase.ts";
import {userAddresses} from "../../consts/userAddresses.ts";

export const renderUserAddressMethod = (selectedAddress: string) => {
	const selectedType = userAddresses.find((el) => el.id === selectedAddress)!.type;

	const cardAddress: HTMLDivElement = document.querySelector('.card__addressWrapper')!;
	cardAddress.innerHTML = userAddressBase(userAddresses.find((el) => el.id === selectedAddress)!, 'card__data');

	const cardTitle: HTMLDivElement = document.querySelector('.card__title')!;
	cardTitle.textContent = selectedType === 'point' ? 'Пункт выдачи' : 'Курьер';

	const deliveryPrice: HTMLDivElement = document.querySelector('[data-delivery-price]')!;
	deliveryPrice.textContent = userAddresses.find((el) => el.id === selectedAddress)!.price ?? 'Бесплатно';
};
