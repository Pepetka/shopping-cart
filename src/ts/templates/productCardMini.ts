import {DataForMin, Product} from "../../types/products.ts";

export const cardProductTemplate = (products: Product[], { start, end, products: productsArr }: DataForMin) => {
	return `
		<div class="card__line">
			<div class="card__title">${start}&#8212;${end}</div>
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
