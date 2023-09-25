import {cardProductTemplate} from "../templates/productCardMini.ts";
import {DataForMin, Product} from "../../types/products.ts";
import {getProductsNumMod} from "../helpers/getProductsNumMod.ts";
import {store} from "../../store/store.ts";
import {months} from "../../consts/months.ts";

export const productsForMinCards = (productsNum: Record<string, number>, products: Product[]) => {
	const quantities: Record<string, number> = {};

	return products
		.reduce<DataForMin[]>(
		(acc, { id, delivery }) => {
			const newAcc = [ ...acc ];

			delivery.forEach((deliveryEl) => {
				const index = newAcc.findIndex((acc) => acc.start === deliveryEl.start && acc.end === deliveryEl.end);

				let quantity;

				if ((productsNum[id] - (quantities[id] ?? 0)) > deliveryEl.quantity) {
					quantity = deliveryEl.quantity;
				} else {
					quantity = productsNum[id] - (quantities[id] ?? 0);
				}

				quantities[id] = (quantities[id] ?? 0) + quantity;

				if (index >= 0) {
					newAcc[index] = { ...newAcc[index], products: [...newAcc[index].products, { id, quantity }] }
				} else {
					newAcc.push({ start: deliveryEl.start, end: deliveryEl.end, products: [{ id, quantity }] })
				}
			});

			return newAcc.sort((a, b) => {
				const aArr = a.start.split('.')
				const bArr = b.start.split('.')

				return (+new Date(+aArr[2], +aArr[1] - 1, +aArr[0])) - (+new Date(+bArr[2], +bArr[1] - 1, +bArr[0]));
			});
		}, []).map((data) => {
		return { ...data, products: data.products.filter((el) => el.quantity !== 0) }
	})
		.filter((data) => data.products.length !== 0)
		.map(({ start, end, products }) => {
			let startMod = `${+start.split('.')[0]} ${months[start.split('.')[1]]}`;
			let endMod = `${+end.split('.')[0]} ${months[end.split('.')[1]]}`;

			if (startMod.split(' ')[1] === endMod.split(' ')[1]) {
				startMod = startMod.split(' ')[0];
			} else {
				endMod = `<br/>${endMod}`;
			}

			return { start: startMod, end: endMod, products } as DataForMin;
		});
};

export const renderMiniProducts = () => {
	const productsNumMod = getProductsNumMod(store.productsNum, store.selectedProducts);

	const cardProducts = document.querySelector('.card__products')!;
	cardProducts.innerHTML = productsForMinCards(productsNumMod, store.products)
		.reduce((acc, data) => acc + cardProductTemplate(store.products, data), ``);
};
