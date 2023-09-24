"use strict";
import {productsOutOfStockMock} from "../consts/productsOutOfStock.ts";
import {productsMock} from "../consts/products.ts";
import {renderProducts} from "./render/renderProducts.ts";
import {renderOutOfStockProducts} from "./render/renderOutOfStockProducts.ts";
import {renderMiniProducts} from "./render/renderMiniProducts.ts";
import {Product} from "../types/products.ts";
import {fixProductsNum} from "../helpers/fixProductsNum.ts";
import {fixProductPrice} from "../helpers/fixPrice.ts";
import {getProductsNumMod} from "../helpers/getProductsNumMod.ts";

let products = productsMock;
let ids = products.map(({ id }) => id);
let productsOutOfStock = productsOutOfStockMock;
const productsNum: Record<string, number> = {
	'product1': 1,
	'product2': 200,
	'product3': 2,
};
let selectedProducts: string[] = [];

let productsFavorite: (Product | Pick<Product, 'id' | 'name' | 'img' | 'options'>)[] = [];

const productAccordion = () => {
	const accordionToggles: NodeListOf<HTMLElement> = document.querySelectorAll('.goods__toggle');
	const accordions: NodeListOf<HTMLElement> = document.querySelectorAll('.accordion');

	accordionToggles.forEach((toggle) => {
		toggle.addEventListener('click', () => {
			const data = toggle.dataset.accordion;
			const productsNumMod = getProductsNumMod(productsNum, selectedProducts);

			fixTotalNumTotalPrice(
				Object.values(productsNumMod).reduce((acc, curr) => acc + curr, 0),
				products.reduce((acc, { id, price }) => acc + (productsNumMod[id] * price), 0),
				products[0].currency,
			);

			toggle.classList.toggle('goods__toggle_rotate');

			if (data === 'normal') {
				toggle.parentElement!.classList.toggle('goods__header_close');
			}

			accordions.forEach((accordion) => {
				if (accordion.dataset.accordion === data) {
					return accordion.classList.toggle('accordion__close');
				}
			});
		});
	});
};

const productCheckboxes = () => {
	const allCheckbox: HTMLInputElement = document.querySelector('[data-product-list-checkbox]')!;
	const productCards: NodeListOf<HTMLElement> = document.querySelectorAll('[data-product]');

	productCards.forEach((product) => {
		const id = product.dataset['product'] ?? '';
		const checkbox: HTMLInputElement = product.querySelector('.checkbox input')!;

		if (checkbox.checked) {
			selectedProducts.push(id);
		}
	});
	renderMiniProducts(productsNum, selectedProducts, products);

	productCards.forEach((product) => {
		const id = product.dataset['product'] ?? '';
		const checkbox: HTMLInputElement = product.querySelector('.checkbox input')!;

		checkbox.addEventListener('click', () => {
			if (checkbox.checked) {
				selectedProducts = [...selectedProducts.filter((el) => el !== id), id]
			} else {
				selectedProducts = selectedProducts.filter((el) => el !== id)
			}

			allCheckbox.checked = selectedProducts.length >= ids.length;
			renderMiniProducts(productsNum, selectedProducts, products);
		});
	});

	allCheckbox.addEventListener('click', () => {
		if (allCheckbox.checked) {
			selectedProducts = [...ids];
		} else {
			selectedProducts = [];
		}

		productCards.forEach((product) => {
			const checkbox: HTMLInputElement = product.querySelector('.checkbox input')!;
			checkbox.checked = allCheckbox.checked;
		});

		renderMiniProducts(productsNum, selectedProducts, products);
	});
};

const changeProductsQuantity = () => {
	const productCards: NodeListOf<HTMLElement> = document.querySelectorAll('[data-product]');

	productCards.forEach((productElement) => {
		const id = productElement.dataset['product'] ?? '';
		const product = products.find((product) => product.id === id)!;
		const minus: HTMLButtonElement = productElement.querySelector('.counter__decr')!;
		const quantity: HTMLElement = productElement.querySelector('.counter__data')!;
		const plus: HTMLButtonElement = productElement.querySelector('.counter__incr')!;

		plus.disabled = productsNum[id] === product.totalQuantity;
		minus.disabled = productsNum[id] === 1;

		minus.addEventListener('click', () => {
			quantity.innerText = `${+quantity.innerText - 1}`;
			productsNum[id] = +quantity.innerText;

			plus.disabled = productsNum[id] === product.totalQuantity;
			minus.disabled = productsNum[id] === 1;

			fixProductPrice(productsNum[id], id, product);
			renderMiniProducts(productsNum, selectedProducts, products);
		});

		plus.addEventListener('click', () => {
			quantity.innerText = `${+quantity.innerText + 1}`;
			productsNum[id] = +quantity.innerText;

			plus.disabled = productsNum[id] === product.totalQuantity;
			minus.disabled = productsNum[id] === 1;

			fixProductPrice(productsNum[id], id, product);
			renderMiniProducts(productsNum, selectedProducts, products);
		});
	});
};

const deleteFavoriteProducts = (productsElements: HTMLCollectionOf<HTMLDivElement>) => {
	const productCads: NodeListOf<HTMLDivElement> = document.querySelectorAll('[data-product]');

	productCads.forEach((product) => {
		const id = product.dataset['product'] ?? '';
		const favoriteButton: HTMLButtonElement = product.querySelector('.product__favorite')!;
		const deleteButton: HTMLButtonElement = product.querySelector('.product__delete')!;

		favoriteButton.addEventListener('click', () => {
			productsFavorite = [...productsFavorite, ...products.filter((product) => product.id === id)];
			products = products.filter((product) => product.id !== id);

			selectedProducts = selectedProducts.filter((el) => el !== id);
			ids = ids.filter((el) => el !== id);

			Array.from(productsElements).forEach((productEl) => {
				if (productEl.dataset['product'] === id) {
					productEl.remove();
				}
			});

			fixProductsNum(products.length);
			renderMiniProducts(productsNum, selectedProducts, products);

			console.log(`Favorites: `, productsFavorite);
		});

		deleteButton.addEventListener('click', () => {
			products = products.filter((product) => product.id !== id);

			selectedProducts = selectedProducts.filter((el) => el !== id);
			ids = ids.filter((el) => el !== id);

			Array.from(productsElements).forEach((productEl) => {
				if (productEl.dataset['product'] === id) {
					productEl.remove();
				}
			});

			fixProductsNum(products.length);
			renderMiniProducts(productsNum, selectedProducts, products);
		});
	});
};

const deleteFavoriteProductsOOS = (productsElements: HTMLCollectionOf<HTMLDivElement>) => {
	const productCads: NodeListOf<HTMLDivElement> = document.querySelectorAll('[data-product-out-of-stock]')!;

	productCads.forEach((product) => {
		const id = product.dataset['productOutOfStock'];
		const favoriteButton: HTMLButtonElement = product.querySelector('.product__favorite')!;
		const deleteButton: HTMLButtonElement = product.querySelector('.product__delete')!;

		favoriteButton.addEventListener('click', () => {
			productsFavorite = [...productsFavorite, ...productsOutOfStock.filter((product) => product.id === id)];
			productsOutOfStock = productsOutOfStock.filter((product) => product.id !== id);

			Array.from(productsElements).forEach((productEl) => {
				if (productEl.dataset['productOutOfStock'] === id) {
					productEl.remove();
				}
			});
			fixOutOfStockNum(productsOutOfStock.length);

			console.log(`Favorites: `, productsFavorite);
		});

		deleteButton.addEventListener('click', () => {
			productsOutOfStock = productsOutOfStock.filter((product) => product.id !== id);

			Array.from(productsElements).forEach((productEl) => {
				if (productEl.dataset['productOutOfStock'] === id) {
					productEl.remove();
				}
			});
			fixOutOfStockNum(productsOutOfStock.length);

		});
	});
};

const fixOutOfStockNum = (num: number) => {
	const outOfStockHeader = document.querySelector('.goods__header_outOfStock > span')!;
	outOfStockHeader.textContent = `Отсутствуют · ${num} товара`;
};

const fixTotalNumTotalPrice = (num: number, totalPrice: number, currency: string) => {
	const normalHeader = document.querySelector('.goods__header_normal > span')!;
	normalHeader.textContent = `${num} товаров · ${totalPrice.toLocaleString('ru')} ${currency}`;
};

document.addEventListener('DOMContentLoaded', () => {
	// отрисовка товаров
	const productsElements = renderProducts(productsNum, products);
	const productsOutOfStockElements = renderOutOfStockProducts(productsOutOfStock);
	renderMiniProducts(productsNum, selectedProducts, products);

	// установка необходимых значений
	fixProductsNum(products.length);
	fixOutOfStockNum(productsOutOfStock.length);
	fixTotalNumTotalPrice(
		Object.values(productsNum).reduce((acc, curr) => acc + curr, 0),
		products.reduce((acc, { id, price }) => acc + (productsNum[id] * price), 0),
		products[0].currency,
	);

	// показ/скрытие списков товаров
	productAccordion();

	// работа с чекбоксами товаров
	productCheckboxes();

	// работа с количеством определенного товара
	changeProductsQuantity();

	// удаление/добавление в избранное товаров
	deleteFavoriteProducts(productsElements);
	deleteFavoriteProductsOOS(productsOutOfStockElements)
});
