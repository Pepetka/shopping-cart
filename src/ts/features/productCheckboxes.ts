import {fixCheckboxChecked} from "../fixes/fixCheckboxChecked.ts";
import {store} from "../../store/store.ts";
import {renderMiniProducts} from "../render/renderMiniProducts.ts";
import {fixDeliveryDate} from "../fixes/fixDeliveryDate.ts";
import {fixTotalPrev, fixTotalPrice, fixTotalSale} from "../fixes/fixTotal.ts";

export const productCheckboxes = () => {
	const allCheckbox: HTMLInputElement = document.querySelector('[data-product-list-checkbox]')!;
	const productCards: NodeListOf<HTMLElement> = document.querySelectorAll('[data-product]');

	fixCheckboxChecked(store.selectedProducts);
	renderMiniProducts();

	productCards.forEach((product) => {
		const id = product.dataset['product'] ?? '';
		const checkbox: HTMLInputElement = product.querySelector('.checkbox input')!;

		checkbox.addEventListener('click', () => {
			if (checkbox.checked) {
				store.setSelectedProducts(id);
			} else {
				store.removeSelectedProducts(id);
			}

			allCheckbox.checked = store.selectedProducts.length >= store.ids.length;
			renderMiniProducts();
			fixDeliveryDate();
			fixTotalPrice(store.getTotalPrice(), store.currency);
			fixTotalPrev(store.getTotalNum(), store.getTotalPrevPrice(), store.currency);
			fixTotalSale(store.getTotalPrice(), store.getTotalPrevPrice(), store.currency);
		});
	});

	allCheckbox.addEventListener('click', () => {
		if (allCheckbox.checked) {
			store.setSelectedProducts();
		} else {
			store.removeSelectedProducts();
		}

		productCards.forEach((product) => {
			const checkbox: HTMLInputElement = product.querySelector('.checkbox input')!;
			checkbox.checked = allCheckbox.checked;
		});

		renderMiniProducts();
		fixDeliveryDate();
		fixTotalPrice(store.getTotalPrice(), store.currency);
		fixTotalPrev(store.getTotalNum(), store.getTotalPrevPrice(), store.currency);
		fixTotalSale(store.getTotalPrice(), store.getTotalPrevPrice(), store.currency);
	});
};
