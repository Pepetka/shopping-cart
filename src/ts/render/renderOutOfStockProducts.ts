import {productCardOutOfStockTemplate} from "../templates/productCardOutOfStock.ts";
import {store} from "../../store/store.ts";

export const renderOutOfStockProducts = () => {
	const goodsOutOfStockList = document.querySelector('.goods__list_outOfStock')!;
	goodsOutOfStockList.innerHTML = store.productsOutOfStock
		.reduce((acc, product) => acc + productCardOutOfStockTemplate(product), ``);

	return goodsOutOfStockList.getElementsByClassName('product') as HTMLCollectionOf<HTMLDivElement>;
};
