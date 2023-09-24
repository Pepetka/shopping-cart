import {months} from "../../consts/months.ts";
import {DataForMin, Product} from "../../types/products.ts";

export const cardProductTemplate = (products: Product[], { start, end, products: productsArr }: DataForMin) => {
	let startMod = `${+start.split('.')[0]} ${months[start.split('.')[1]]}`;
	let endMod = `${+end.split('.')[0]} ${months[end.split('.')[1]]}`;

	if (startMod.split(' ')[1] === endMod.split(' ')[1]) {
		startMod = startMod.split(' ')[0];
	} else {
		endMod = `<br/>${endMod}`;
	}

	return `
		<div class="card__line">
			<div class="card__title">${startMod}&#8212;${endMod}</div>
			<div class="card__imagesList">
				${productsArr.reduce((acc, { id, quantity }) => {
					return acc + `
						<div class="card__image">
							${quantity > 1 ? (
								`
									<span class="notification card__notification">${quantity}</span>
								`
							) : ''}
							<img src="${products.find((product) => product.id === id )?.img}" alt="Product image" />
						</div>
					`
				}, ``)}
			</div>
		</div>
	`
};
