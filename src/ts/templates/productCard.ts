import {Product} from "../../types/products.ts";
import {getOptions} from "../helpers/getOptions.ts";
import informationSVG from "../../assets/icons/Information.svg";

export const productCardTemplate = ({ id, name, img, price, currency, prevPrice, options, company, totalQuantity }: Product, quantity: number) => {
	return `
		<div data-product="${id}" class="product goods__product">
			<div>
				<label class="checkbox product__checkbox">
					<input type="checkbox" checked />
				</label>

				<div class="product__information">
					${options?.['Размер'] ? (
						`
							<div class="product__mobileSize">
								<span>${options['Размер']}</span>
							</div>
						`
					) : ''}

					<img class="product__image" src="${img}" alt="Product image">

					<div class="product__details">
						<div class="price product__mobilePrice">
							<div class="price__current price__current_bigNum">
								${price}&nbsp;
								<span>${currency}</span>
							</div>
							<div class="price__previous price__previous_bigNum">
								${prevPrice} ${currency}
							</div>
						</div>

						<div class="product__name">
							${name}
						</div>

						${getOptions(options)}

						<div class="product__company">
							<div>${company[0]}</div>
							<div>
								${company[1]}
								<img src="${informationSVG}" alt="information" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div>
				<div class="product__controls">
					<div class="counter product__counter">
						<button class="counter__decr" ${quantity === 1 ? 'disabled' : ''}>
							<span>&minus;</span>
						</button>
						
						<span class="counter__data" contenteditable="true">${quantity}</span>
						
						<button class="counter__incr" ${quantity === totalQuantity ? 'disabled' : ''}>
							<span>&plus;</span>
						</button>
					</div>
					
					${
						totalQuantity <= 10 ? (
							`
								<div class="product__left">
									Осталось ${totalQuantity} шт.
								</div>
							`
						) : (
							''
						)
					}
					
					<div class="product__buttons">
						<button class="product__favorite"></button>
						<button class="product__delete"></button>
					</div>
				</div>

				<div class="price product__price">
					<div class="price__current ${(price * quantity).toString().length > 4 ? 'price__current_bigNum' : ''}">
						${(price * quantity).toLocaleString('ru')}&nbsp;
						<span>${currency}</span>
					</div>
					
					<div class="price__previous ${(prevPrice * quantity).toString().length > 4 ? 'price__previous_bigNum' : ''}">
						${(prevPrice * quantity).toLocaleString('ru')} ${currency}
					</div>
			</div>
		</div>
	</div>
	`
};
