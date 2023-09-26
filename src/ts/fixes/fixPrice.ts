import {Product} from "../../types/products.ts";
import {store} from "../../store/store.ts";

export const fixProductPrice = (num: number, id: string, {price, prevPrice, currency, priceDetails}: Product) => {
	const priceElement = document.querySelector(`[data-product=${id}] .product__price`)!;
	const priceMobileElement = document.querySelector(`[data-product=${id}] .product__mobilePrice`)!;

	const newCurrPrice = num * price;
	const newPrevPrice = num * prevPrice;

	priceElement.innerHTML = `
		<div class="price__current ${newCurrPrice.toString().length > 4 ? 'price__current_bigNum' : ''}">
			${newCurrPrice.toLocaleString('ru')}&nbsp;
			<span>${currency}</span>
		</div>
		
		<div class="price__previous ${newPrevPrice.toString().length > 4 ? 'price__previous_bigNum' : ''}">
			${newPrevPrice.toLocaleString('ru')} ${currency}
			
			<div data-price-popover="${id}" class="popover price__popover">
				${priceDetails.reduce((acc, {name, sale}) => acc + (`
					<div>
						${name}
						<span>−${store.productsNum[id] * sale} ${currency}</span>
					</div>
				`), ``)}
			</div>
		</div>
	`;

	priceMobileElement.innerHTML = `
		<div class="price__current price__current_bigNum">
			${newCurrPrice.toLocaleString('ru')}&nbsp;
			<span>${currency}</span>
		</div>
		
		<div class="price__previous price__previous_bigNum">
			${newPrevPrice.toLocaleString('ru')} ${currency}
		</div>
	`;
};
