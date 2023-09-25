import {store} from "../../store/store.ts";
import {fixProductsNum} from "../fixes/fixProductsNum.ts";
import {renderMiniProducts} from "../render/renderMiniProducts.ts";
import {fixOutOfStockNum} from "../fixes/fixOutOfStockNum.ts";

export const deleteFavoriteProducts = (productsElements: HTMLCollectionOf<HTMLDivElement>) => {
	const productCads: NodeListOf<HTMLDivElement> = document.querySelectorAll('[data-product]');

	productCads.forEach((product) => {
		const id = product.dataset['product'] ?? '';
		const favoriteButton: HTMLButtonElement = product.querySelector('.product__favorite')!;
		const deleteButton: HTMLButtonElement = product.querySelector('.product__delete')!;

		favoriteButton.addEventListener('click', () => {
			store.setProductsFavorite(id);

			Array.from(productsElements).forEach((productEl) => {
				if (productEl.dataset['product'] === id) {
					productEl.remove();
				}
			});

			fixProductsNum();
			renderMiniProducts();

			console.log(`Favorites: `, store.productsFavorite);
		});

		deleteButton.addEventListener('click', () => {
			store.removeProducts(id);

			Array.from(productsElements).forEach((productEl) => {
				if (productEl.dataset['product'] === id) {
					productEl.remove();
				}
			});

			fixProductsNum();
			renderMiniProducts();
		});
	});
};

export const deleteFavoriteProductsOOS = (productsElements: HTMLCollectionOf<HTMLDivElement>) => {
	const productCads: NodeListOf<HTMLDivElement> = document.querySelectorAll('[data-product-out-of-stock]')!;

	productCads.forEach((product) => {
		const id = product.dataset['productOutOfStock'] ?? '';
		const favoriteButton: HTMLButtonElement = product.querySelector('.product__favorite')!;
		const deleteButton: HTMLButtonElement = product.querySelector('.product__delete')!;

		favoriteButton.addEventListener('click', () => {
			store.setProductsFavorite(id);

			Array.from(productsElements).forEach((productEl) => {
				if (productEl.dataset['productOutOfStock'] === id) {
					productEl.remove();
				}
			});
			fixOutOfStockNum();

			console.log(`Favorites: `, store.productsFavorite);
		});

		deleteButton.addEventListener('click', () => {
			store.removeProducts(id);

			Array.from(productsElements).forEach((productEl) => {
				if (productEl.dataset['productOutOfStock'] === id) {
					productEl.remove();
				}
			});
			fixOutOfStockNum();
		});
	});
};
