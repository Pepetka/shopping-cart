import {Product} from "../../types/products.ts";
import {productCardTemplate} from "../templates/productCard.ts";

export const renderProducts = (productsNum: Record<string, number>, products: Product[]) => {
	const headerNotification = document.querySelector('.header__notification')!;
	headerNotification.textContent = `${products.length}`;

	const goodsList = document.querySelector('.goods__list_normal')!;
	goodsList.innerHTML = products
		.reduce((acc, product) => acc + productCardTemplate(product, productsNum[product.id]), ``);

	return goodsList.getElementsByClassName('product') as HTMLCollectionOf<HTMLDivElement>;
};
