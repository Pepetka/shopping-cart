import {store} from "../../store/store.ts";
import {getFormattedProductCount} from "../helpers/getFormattedProductCount.ts";

export const fixTotalNumTotalPrice = () => {
	const num = store.getTotalNum();
	const totalPrice = store.getTotalPrice();
	const currency = store.currency;

	const normalHeader = document.querySelector('.goods__header_normal > span')!;
	normalHeader.textContent = `${getFormattedProductCount(num)} · ${totalPrice.toLocaleString('ru')} ${currency}`;
};
