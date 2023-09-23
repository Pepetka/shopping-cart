"use strict";

let products = [
	{
		id: 'product1',
		name: 'Футболка UZcotton мужская',
		img: './src/assets/images/product1.png',
		price: '522',
		currency: 'сом',
		prevPrice: '1051',
		options: {
			'Цвет': 'белый',
			'Размер': '56',
		},
		company: ['Коледино WB', 'OOO Вайлдберриз'],
		totalQuantity: 2,
		delivery: [
			{
				start: '05.02.2023',
				end: '06.02.2023',
				quantity: 1,
			},
			{
				start: '27.02.2023',
				end: '01.03.2023',
				quantity: 1,
			}
		]
	},
	{
		id: 'product2',
		name: 'Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe',
		img: './src/assets/images/product2.png',
		price: '2 100 047',
		currency: 'сом',
		prevPrice: '2 300 047',
		options: {
			'Цвет': 'прозрачный',
		},
		company: ['Коледино WB', 'OOO Мегапрофстиль'],
		totalQuantity: 300,
		delivery: [
			{
				start: '05.02.2023',
				end: '06.02.2023',
				quantity: 184,
			},
			{
				start: '07.02.2023',
				end: '08.02.2023',
				quantity: 116,
			}
		]
	},
	{
		id: 'product3',
		name: `Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные,<br/>Faber-Castell`,
		img: './src/assets/images/product3.png',
		price: '494',
		currency: 'сом',
		prevPrice: '950',
		company: ['Коледино WB', 'OOO Вайлдберриз'],
		totalQuantity: 2,
		delivery: [
			{
				start: '05.02.2023',
				end: '06.02.2023',
				quantity: 2,
			},
		]
	}
];
let ids = products.map(({ id }) => id);

let productsFavorite = [];
let productsOOSFavorite = [];

const getOptions = (options) => {
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

const productCardTemplate = ({ id, name, img, price, currency, prevPrice, options, company, totalQuantity }, quantity) => {
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
								<img src="./src/assets/icons/Information.svg" alt="information" />
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
						
						<span class="counter__data">${quantity}</span>
						
						<button class="counter__incr" ${quantity === totalQuantity ? 'disabled' : ''}>
							<span>&plus;</span>
						</button>
					</div>
					
					${
						totalQuantity <= 10 ? (
							`
								<div class="product__left">
									Осталось 2 шт.
								</div>
							`
						) : (
							''
						)
					}
					
					<div class="product__buttons">
						<button class="product__favorite"><img class="product__favorite" src="./src/assets/icons/Favorite.svg" alt="Add to favorites" /></button>
						<button class="product__delete"><img class="product__basket" src="./src/assets/icons/Basket.svg" alt="Delete" /></button>
					</div>
				</div>

				<div class="price product__price">
					<div class="price__current ${price.length > 4 ? 'price__current_bigNum' : ''}">
						${price}&nbsp;
						<span>${currency}</span>
					</div>
					
					<div class="price__previous ${price.length > 4 ? 'price__previous_bigNum' : ''}">
						${prevPrice} ${currency}
					</div>
			</div>
		</div>
	</div>
	`
}

let productsOutOfStock = [
	{
		id: 'product1',
		name: 'Футболка UZcotton мужская',
		img: './src/assets/images/product1.png',
		options: {
			'Цвет': 'белый',
			'Размер': '56',
		},
	},
	{
		id: 'product2',
		name: 'Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe',
		img: './src/assets/images/product2.png',
		options: {
			'Цвет': 'прозрачный',
		},
	},
	{
		id: 'product3',
		name: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell',
		img: './src/assets/images/product3.png',
	}
];

const productCardOutOfStockTemplate = ({ id, name, img, options }) => {
	return `
		<div data-product-out-of-stock="${id}" class="product goods__product">
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
						<div class="product__name">
							${name}
						</div>

						${getOptions(options)}
					</div>
				</div>
			</div>

			<div>
				<div class="product__controls">
					<div class="product__buttons product__buttons_outOfStock">
						<button class="product__favorite"><img src="./src/assets/icons/Favorite.svg" alt="Add to favorites" /></button>
						<button class="product__delete"><img src="./src/assets/icons/Basket.svg" alt="Delete" /></button>
					</div>
				</div>

				<div class="price product__price">
			</div>
		</div>
	</div>
	`
};

const productsForMinCards = (productsNum) => {
	const quantities = {}; // {[id]: num}

	return products.reduce((acc, { id, delivery }) => {
		const newAcc = [ ...acc ]; // [{ start: '5 февраля', end: '6 февраля', products: [{id: 'product1', quantity: 1}] }];

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

			return new Date(aArr[2], aArr[1] - 1, aArr[0]) - new Date(bArr[2], bArr[1] - 1, bArr[0]);
		});
	}, []).map((data) => {
		return { ...data, products: data.products.filter((el) => el.quantity !== 0) }
	}).filter((data) => data.products.length !== 0)
};

const months = {
	'01': 'января',
	'02': 'февраля',
	'03': 'марта',
	'04': 'апреля',
	'05': 'мая',
	'06': 'июня',
	'07': 'июля',
	'08': 'августа',
	'09': 'сентября',
	'10': 'октября',
	'11': 'ноября',
	'12': 'декабря',
};

const cardProductTemplate = ({ start, end, products: productsArr }) => {
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
							<img src="${products.find((product) => product.id === id ).img}" alt="Product image" />
						</div>
					`
				}, ``)}
			</div>
		</div>
	`
};

const renderProducts = (productsNum, selectedProducts) => {
	const goodsList = document.querySelector('.goods__list_normal');
	goodsList.innerHTML = products.reduce((acc, product) => acc + productCardTemplate(product, productsNum[product.id]), ``);

	// работа с чекбоксами товаров
	productCheckboxes(productsNum, selectedProducts);
	// работа с количеством определенного товара
	changeProductsQuantity(productsNum, selectedProducts);
	// удаление/добавление в избранное товаров
	// deleteFavoriteProducts(productsNum, selectedProducts);
};
const renderOOSProducts = (productsNum) => {
	const goodsOutOfStockList = document.querySelector('.goods__list_outOfStock');
	goodsOutOfStockList.innerHTML = productsOutOfStock.reduce((acc, product) => acc + productCardOutOfStockTemplate(product), ``);

	// удаление/добавление в избранное товаров
	// deleteFavoriteProductsOOS(productsNum);
};
const renderMiniProducts = (productsNum, selectedProducts) => {
	const productsNumMod = Object.entries(productsNum)
		.map(([key, value]) => selectedProducts.includes(key) ? [key, value] : [key, 0])
		.reduce((acc, [key, value]) => ({...acc, [key]: value}), {});

	const cardProducts = document.querySelector('.card__products');
	cardProducts.innerHTML = productsForMinCards(productsNumMod).reduce((acc, data) => acc + cardProductTemplate(data), ``);
};

const productAccordion = () => {
	const accordionToggles = document.querySelectorAll('.goods__toggle');
	const accordions = document.querySelectorAll('.accordion');

	accordionToggles.forEach((toggle) => {
		toggle.addEventListener('click', (event) => {
			const data = toggle.dataset.accordion;

			accordions.forEach((accordion) => {
				if (accordion.dataset.accordion === data) {
					return accordion.classList.toggle('accordion__close')
				}
			})
		})
	});
}

const productCheckboxes = (productsNum, selectedProducts) => {
	const allCheckbox = document.querySelector('[data-product-list-checkbox]');
	const productCards = document.querySelectorAll('[data-product]');

	productCards.forEach((product) => {
		const id = product.dataset['product'];
		const checkbox = product.querySelector('.checkbox input');

		if (checkbox.checked) {
			selectedProducts.push(id);
		}
	});
	renderMiniProducts(productsNum, selectedProducts);

	productCards.forEach((product) => {
		const id = product.dataset['product'];
		const checkbox = product.querySelector('.checkbox input');

		checkbox.addEventListener('click', (e) => {
			if (e.target.checked) {
				selectedProducts = [...selectedProducts.filter((el) => el !== id), id]
			} else {
				selectedProducts = selectedProducts.filter((el) => el !== id)
			}

			allCheckbox.checked = selectedProducts.length >= ids.length;
			renderMiniProducts(productsNum, selectedProducts);
		});
	});

	allCheckbox.addEventListener('click', () => {
		if (allCheckbox.checked) {
			selectedProducts = [...ids];
		} else {
			selectedProducts = [];
		}

		productCards.forEach((product) => {
			const checkbox = product.querySelector('.checkbox input');
			checkbox.checked = allCheckbox.checked;
		});

		renderMiniProducts(productsNum, selectedProducts);
	});
};

const changeProductsQuantity = (productsNum, selectedProducts) => {
	const productCards = document.querySelectorAll('[data-product]');

	productCards.forEach((product) => {
		const id = product.dataset['product'];
		const totalQuantity = products.find((product) => product.id === id).totalQuantity;
		const minus = product.querySelector('.counter__decr');
		const quantity = product.querySelector('.counter__data');
		const plus = product.querySelector('.counter__incr');

		plus.disabled = productsNum[id] === totalQuantity;
		minus.disabled = productsNum[id] === 1;

		minus.addEventListener('click', () => {
			quantity.innerText = +quantity.innerText - 1;
			productsNum[id] = +quantity.innerText;

			plus.disabled = productsNum[id] === totalQuantity;
			minus.disabled = productsNum[id] === 1;

			renderMiniProducts(productsNum, selectedProducts);
		});

		plus.addEventListener('click', () => {
			quantity.innerText = +quantity.innerText + 1;
			productsNum[id] = +quantity.innerText;

			plus.disabled = productsNum[id] === totalQuantity;
			minus.disabled = productsNum[id] === 1;

			renderMiniProducts(productsNum, selectedProducts);
		});
	});
};

// const deleteFavoriteProducts = (productsNum, selectedProducts) => {
// 	const productCads = document.querySelectorAll('[data-product]');
// 	productCads.forEach((product) => {
// 		const id = product.dataset['product'];
// 		const favoriteButton = product.querySelector('.product__favorite');
// 		const deleteButton = product.querySelector('.product__delete');
//
// 		favoriteButton.addEventListener('click', () => {
// 			productsFavorite = [...products.filter((product) => product.id === id)];
// 			products = products.filter((product) => product.id !== id);
//
// 			productsNum[id] = undefined;
// 			selectedProducts = selectedProducts.filter((el) => el.id !== id);
// 			ids = ids.filter((el) => el.id !== id);
//
// 			renderProducts(productsNum);
// 			renderMiniProducts(productsNum, selectedProducts);
// 			deleteFavoriteProducts(productsNum);
// 		});
//
// 		deleteButton.addEventListener('click', () => {
// 			products = products.filter((product) => product.id !== id);
//
// 			productsNum[id] = undefined;
// 			selectedProducts = selectedProducts.filter((el) => el.id !== id);
// 			ids = ids.filter((el) => el.id !== id);
//
// 			renderProducts(productsNum);
// 			renderMiniProducts(productsNum, selectedProducts);
// 			deleteFavoriteProducts(productsNum);
// 		});
// 	});
// };
// const deleteFavoriteProductsOOS = (productsNum) => {
// 	const productCads = document.querySelectorAll('[data-product-out-of-stock]');
//
// 	productCads.forEach((product) => {
// 		const id = product.dataset['productOutOfStock'];
// 		const favoriteButton = product.querySelector('.product__favorite');
// 		const deleteButton = product.querySelector('.product__delete');
//
// 		favoriteButton.addEventListener('click', () => {
// 			productsOOSFavorite = [...productsOutOfStock.filter((product) => product.id === id)];
// 			productsOutOfStock = productsOutOfStock.filter((product) => product.id !== id);
//
// 			renderOOSProducts();
// 			deleteFavoriteProductsOOS(productsNum);
// 		});
//
// 		deleteButton.addEventListener('click', () => {
// 			productsOutOfStock = productsOutOfStock.filter((product) => product.id !== id);
//
// 			renderOOSProducts();
// 			deleteFavoriteProductsOOS(productsNum);
// 		});
// 	});
// };

document.addEventListener('DOMContentLoaded', () => {
	const productsNum = {
		'product1': 1,
		'product2': 200,
		'product3': 2,
	};
	let selectedProducts = [];

	// отрисовка товаров
	renderProducts(productsNum, selectedProducts);
	renderOOSProducts(productsNum);
	renderMiniProducts(productsNum, selectedProducts);

	// показ/скрытие списков товаров
	productAccordion();
});
