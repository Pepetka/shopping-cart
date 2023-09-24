import {Product} from "../types/products.ts";

export const getOptions = (options: Product['options']) => {
	return options ? (
		`
			<div class="product__options">
				${
			Object.entries(options).reduce((acc, [key, value]) => {
				const currEl = key === 'Размер' ? `<span class="product__size">${key}: ${value}</span>` : `<span>${key}: ${value}</span>`

				return acc + currEl;
			}, ``)
		}
			</div>
		`
	) : ''
};
