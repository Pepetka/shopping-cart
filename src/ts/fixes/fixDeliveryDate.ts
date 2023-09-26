import {productsForMinCards} from "../render/renderMiniProducts.ts";
import {store} from "../../store/store.ts";
import {getProductsNumMod} from "../helpers/getProductsNumMod.ts";
import {getMinMonths} from "../helpers/getMinMonths.ts";

export const fixDeliveryDate = () => {
	const deliveryDateContainer: HTMLDivElement = document.querySelector('.delivery__date')!;
	const productsNumMod = getProductsNumMod(store.productsNum, store.selectedProducts);
	const data = productsForMinCards(productsNumMod, store.products);
	const el = data[data.length - 1];

	deliveryDateContainer.textContent = el ? `${getMinMonths(el.start)}–${getMinMonths(el.end.replace(/<br\/>/gi, ''))}` : 'Выберете товары';
}
