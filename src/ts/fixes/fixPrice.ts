import {Product} from "../../types/products.ts";

export const fixProductPrice = (num: number, id: string, {price, prevPrice, currency}: Product) => {
	const priceElement = document.querySelector(`[data-product=${id}] .product__price`)!;

	const newCurrPrice = num * price;
	const newPrevPrice = num * prevPrice;

	priceElement.innerHTML = `
		<div class="price__current ${newCurrPrice.toString().length > 4 ? 'price__current_bigNum' : ''}">
			${newCurrPrice.toLocaleString('ru')}&nbsp;
			<span>${currency}</span>
		</div>
		
		<div class="price__previous ${newPrevPrice.toString().length > 4 ? 'price__previous_bigNum' : ''}">
			${newPrevPrice.toLocaleString('ru')} ${currency}
		</div>
	`;
};
