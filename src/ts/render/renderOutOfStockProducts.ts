import {productCardOutOfStockTemplate} from "../templates/productCardOutOfStock.ts";
import {Product} from "../../types/products.ts";

export const renderOutOfStockProducts = (productsOutOfStock: Pick<Product, 'id' | 'name' | 'img' | 'options'>[]) => {
	const goodsOutOfStockList = document.querySelector('.goods__list_outOfStock')!;
	goodsOutOfStockList.innerHTML = productsOutOfStock.reduce((acc, product) => acc + productCardOutOfStockTemplate(product), ``);

	return goodsOutOfStockList.getElementsByClassName('product') as HTMLCollectionOf<HTMLDivElement>;
};
