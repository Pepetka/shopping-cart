import {store} from "../../store/store.ts";
import {fixProductsNum} from "../fixes/fixProductsNum.ts";
import {renderMiniProducts} from "../render/renderMiniProducts.ts";
import {fixOutOfStockNum} from "../fixes/fixOutOfStockNum.ts";
import {fixOrderButtonPrice} from "../fixes/fixOrderButtonPrice.ts";
import {fixTotalPrev, fixTotalPrice, fixTotalSale} from "../fixes/fixTotal.ts";

const deleteProduct = (product: HTMLDivElement) => {
	product.remove();

	fixProductsNum();
	fixOutOfStockNum();
	renderMiniProducts();
	fixOrderButtonPrice();
	fixTotalPrice();
	fixTotalPrev();
	fixTotalSale();
}

export const deleteFavoriteProducts = () => {
	const productCads: NodeListOf<HTMLDivElement> = document.querySelectorAll('[data-product]');

	productCads.forEach((product) => {
		const id = product.dataset['product'] ?? '';
		const favoriteButton: HTMLButtonElement = product.querySelector('.product__favorite')!;
		const deleteButton: HTMLButtonElement = product.querySelector('.product__delete')!;

		favoriteButton.addEventListener('click', () => {
			store.setProductsFavorite(id);
			deleteProduct(product);
		});

		deleteButton.addEventListener('click', () => {
			store.removeProducts(id);
			deleteProduct(product);
		});
	});
};
