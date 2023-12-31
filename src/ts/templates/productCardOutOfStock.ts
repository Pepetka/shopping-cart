import {ProductOutOfStock} from "../../types/products.ts";
import {getOptions} from "../helpers/getOptions.ts";

export const productCardOutOfStockTemplate = ({ id, name, img, options, link }: ProductOutOfStock) => {
	return `
		<div data-product="${id}" class="product goods__product">
			<div>
				<div class="product__information">
					${options?.['Размер'] ? (
						`
							<div class="product__mobileSize">
								<span>${options['Размер']}</span>
							</div>
						`
					) : ''}

					<img class="product__image product__image_outOfStock" src="${img}" alt="Product image">

					<div class="product__details product__details_outOfStock">
						<a href="${link}" class="product__name">
							${name}
						</a>

						${getOptions(options)}
					</div>
				</div>
			</div>

			<div>
				<div class="product__controls">
					<div class="product__buttons product__buttons_outOfStock">
						<button class="product__favorite"></button>
						<button class="product__delete"></button>
					</div>
				</div>

				<div class="price product__price">
			</div>
		</div>
	</div>
	`
};
