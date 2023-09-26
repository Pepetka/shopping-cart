import {store} from "../../store/store.ts";
import {getFormattedProductCount} from "../helpers/getFormattedProductCount.ts";

export const fixOutOfStockNum = () => {
	const outOfStockHeader = document.querySelector('.goods__header_outOfStock > span')!;
	outOfStockHeader.textContent = `Отсутствуют · ${getFormattedProductCount(store.productsOutOfStock.length)}`;
};
