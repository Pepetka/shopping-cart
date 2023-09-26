import {store} from "../../store/store.ts";
import {getFormattedProductCount} from "../helpers/getFormattedProductCount.ts";

export const fixTotalPrice = () => {
	const totalPriceElement: HTMLDivElement = document.querySelector('.totalPrice__price')!;
	totalPriceElement.innerHTML = `
		${store.getTotalPrice().toLocaleString('ru')}
		<span>${store.currency}</span>
	`;
};

export const fixTotalPrev = () => {
	const prevPriceElement: HTMLDivElement = document.querySelector('[data-total-prev]')!;
	prevPriceElement.innerHTML = `
		${getFormattedProductCount(store.getTotalNum())}
		<div class="totalPrice__price_small">
			${store.getTotalPrevPrice().toLocaleString('ru')}
			<span>${store.currency}</span>
		</div>
	`;
};

export const fixTotalSale = () => {
	const saleElement: HTMLDivElement = document.querySelector('[data-total-sale]')!;
	saleElement.innerHTML = `
		Скидка
		<div class="totalPrice__price_small">
			&minus;${(store.getTotalPrevPrice() - store.getTotalPrice()).toLocaleString('ru')}
			<span>${store.currency}</span>
		</div>
	`;
};

export const fixTotalDeliveryPrice = (deliveryPrice?: number, currency?: string) => {
	const deliveryPriceElement: HTMLDivElement = document.querySelector('[data-total-delivery-price]')!;
	deliveryPriceElement.innerHTML = `
		Доставка
		<div class="totalPrice__price_small">
			${deliveryPrice ? `${deliveryPrice.toLocaleString('ru')} ${currency}` : 'Бесплатно'}
		</div>
	`;
};
