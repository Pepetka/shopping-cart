import {store} from "../../store/store.ts";

export const fixOutOfStockNum = () => {
	const outOfStockHeader = document.querySelector('.goods__header_outOfStock > span')!;
	outOfStockHeader.textContent = `Отсутствуют · ${store.productsOutOfStock.length} товара`;
};
