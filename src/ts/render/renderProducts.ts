import {productCardTemplate} from "../templates/productCard.ts";
import {fixProductsNum} from "../fixes/fixProductsNum.ts";
import {store} from "../../store/store.ts";
import {fixTotalNumTotalPrice} from "../fixes/fixTotalNumTotalPrice.ts";

export const renderProducts = () => {
	const goodsList = document.querySelector('.goods__list_normal')!;
	goodsList.innerHTML = store.products
		.reduce((acc, product) => acc + productCardTemplate(product, store.productsNum[product.id]), ``);

	fixProductsNum();
	fixTotalNumTotalPrice();
};
