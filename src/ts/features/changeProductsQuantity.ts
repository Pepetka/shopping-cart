import {store} from "../../store/store.ts";
import {fixProductPrice} from "../fixes/fixPrice.ts";
import {renderMiniProducts} from "../render/renderMiniProducts.ts";
import {fixDeliveryDate} from "../fixes/fixDeliveryDate.ts";
import {Product} from "../../types/products.ts";
import {fixTotalPrev, fixTotalPrice, fixTotalSale} from "../fixes/fixTotal.ts";

const change = (id: string, plus: HTMLButtonElement, minus: HTMLButtonElement, quantity: HTMLElement, product: Product, k: 1 | -1) => {
	quantity.innerText = `${+quantity.innerText + k}`;
	store.setProductsNum(id, +quantity.innerText);

	plus.disabled = store.productsNum[id] === product.totalQuantity;
	minus.disabled = store.productsNum[id] === 1;

	fixProductPrice(store.productsNum[id], id, product);
	renderMiniProducts();
	fixDeliveryDate();
	fixTotalPrice();
	fixTotalPrev();
	fixTotalSale();
};

export const changeProductsQuantity = () => {
	const productCards: NodeListOf<HTMLElement> = document.querySelectorAll('[data-product]:has(.checkbox)');

	productCards.forEach((productElement) => {
		const id = productElement.dataset['product'] ?? '';
		const product = store.products.find((product) => product.id === id)!;
		const minus: HTMLButtonElement = productElement.querySelector('.counter__decr')!;
		const quantity: HTMLElement = productElement.querySelector('.counter__data')!;
		const plus: HTMLButtonElement = productElement.querySelector('.counter__incr')!;

		plus.disabled = store.productsNum[id] === product.totalQuantity;
		minus.disabled = store.productsNum[id] === 1;

		minus.addEventListener('click', () => {
			change(id, plus, minus, quantity, product, -1);
		});

		plus.addEventListener('click', () => {
			change(id, plus, minus, quantity, product, 1);
		});
	});
};
