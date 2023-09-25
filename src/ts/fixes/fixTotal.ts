export const fixTotalPrice = (totalPrice: number, currency: string) => {
	const totalPriceElement: HTMLDivElement = document.querySelector('.totalPrice__price')!;
	totalPriceElement.innerHTML = `
		${totalPrice.toLocaleString('ru')}
		<span>${currency}</span>
	`;
};

export const fixTotalPrev = (num: number, totalPrevPrice: number, currency: string) => {
	const prevPriceElement: HTMLDivElement = document.querySelector('[data-total-prev]')!;
	prevPriceElement.innerHTML = `
		${num} товара
		<div class="totalPrice__price_small">
			${totalPrevPrice.toLocaleString('ru')}
			<span>${currency}</span>
		</div>
	`;
};

export const fixTotalSale = (totalPrice: number, totalPrevPrice: number, currency: string) => {
	const saleElement: HTMLDivElement = document.querySelector('[data-total-sale]')!;
	saleElement.innerHTML = `
		Скидка
		<div class="totalPrice__price_small">
			&minus;${(totalPrevPrice - totalPrice).toLocaleString('ru')}
			<span>${currency}</span>
		</div>
	`;
};

export const fixTotalDeliveryPrice = (deliveryPrice: number, currency: string) => {
	const deliveryPriceElement: HTMLDivElement = document.querySelector('[data-total-delivery-price]')!;
	deliveryPriceElement.innerHTML = `
		Доставка
		<div class="totalPrice__price_small">
			${deliveryPrice ? `${deliveryPrice.toLocaleString('ru')} ${currency}` : 'Бесплатно'}
		</div>
	`;
};
