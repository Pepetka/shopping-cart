import {userAddressBase} from "../templates/userAddressBase.ts";
import {userAddresses} from "../../consts/userAddresses.ts";
import {store} from "../../store/store.ts";
import {fixTotalDeliveryPrice} from "../fixes/fixTotal.ts";

export const renderUserAddressMethod = () => {
	const userAddress = userAddresses.find((el) => el.id === store.selectedAddress)!;

	const cardAddress: HTMLDivElement = document.querySelector('.card__addressWrapper')!;
	cardAddress.innerHTML = userAddressBase(userAddresses.find((el) => el.id === store.selectedAddress)!, 'card__data');

	const cardTitle: HTMLDivElement = document.querySelector('.card__title')!;
	cardTitle.textContent = userAddress.type === 'point' ? 'Пункт выдачи' : 'Курьер';

	const deliveryPrice: HTMLDivElement = document.querySelector('[data-delivery-price]')!;
	deliveryPrice.textContent = `${userAddress.price} ${userAddress.currency}` ?? 'Бесплатно';

	fixTotalDeliveryPrice(userAddress.price, userAddress.currency);
};
