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
import {fixOutOfStockNum} from "../helpers/fixOutOfStockNum.ts";
import {fixTotalNumTotalPrice} from "../helpers/fixTotalNumTotalPrice.ts";
import {userCardModal} from "./templates/userCardModal.ts";
import {userCardMethod} from "./templates/userCardMethod.ts";
import {userCardTotal} from "./templates/userCardTotal.ts";

let products = productsMock;
let ids = products.map(({ id }) => id);
let productsOutOfStock = productsOutOfStockMock;
const productsNum: Record<string, number> = {
	'product1': 1,
	'product2': 200,
	'product3': 2,
};
let selectedProducts: string[] = [];
let selectedCard = 'card1';

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

const openModal = (modal: HTMLElement) => {
	modal.classList.remove('modal_hide');
	document.body.style.overflowY = 'hidden';
}

const closeModal = (element: HTMLElement, selectedCard: string) => {
	const modal: HTMLDivElement = element.closest('.modal')!;
	modal.classList.add('modal_hide');
	document.body.style.overflowY = 'auto';

	userCardMethod(selectedCard);
	userCardTotal(selectedCard);
}

const openCloseModals = () => {
	const modals = document.querySelectorAll<HTMLDivElement>('.modal');
	const modalButtons = document.querySelectorAll<HTMLButtonElement>('button[data-modal]');

	modalButtons.forEach((button) => {
		const modalType = button.dataset['modal'];

		button.addEventListener('click', () => {
			modals.forEach((modal) => {
				if (modal.dataset['modal'] !== modalType) return;

				openModal(modal);
			});
		});
	});

	const closeModals = document.querySelectorAll<HTMLDivElement>('.modal__overlay, .modal__close');
	closeModals.forEach((close) => {
		close.addEventListener('click', (event) => {
			event.stopPropagation();

			closeModal(close, selectedCard);
		});
	});
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

	userCardModal(selectedCard);
	userCardMethod(selectedCard);
	userCardTotal(selectedCard);

	// показ/скрытие списков товаров
	productAccordion();

	// работа с чекбоксами товаров
	productCheckboxes();

	// работа с количеством определенного товара
	changeProductsQuantity();

	// удаление/добавление в избранное товаров
	deleteFavoriteProducts(productsElements);
	deleteFavoriteProductsOOS(productsOutOfStockElements);

	// открытие/закрытие модальных окон
	openCloseModals();

	// выбор карты оплаты
	const paymentForm: HTMLFormElement = document.querySelector('[data-modal="payment"] .paymentForm')!;
	paymentForm.addEventListener('submit', (event) => {
		event.preventDefault();

		const formData = new FormData(event.target as HTMLFormElement);
		const formProps = Object.fromEntries(formData) as { card: string };

		selectedCard = formProps.card;
		closeModal(paymentForm, selectedCard);
	});

	// оплатить сразу
	const payImmediately: HTMLInputElement = document.querySelector('.payment__immediately input')!;
	const immediatelyAdditions = document.querySelectorAll<HTMLDivElement>('.payment__immediately span, .card__additional');

	payImmediately.addEventListener('click', () => {
		const totalButton: HTMLButtonElement = document.querySelector('.total__button')!;

		if (payImmediately.checked) {
			immediatelyAdditions.forEach((additions) => {
				additions.classList.add('hide');
				totalButton.textContent = 'Оплатить 1 016 сом';
			});
		} else {
			immediatelyAdditions.forEach((additions) => {
				additions.classList.remove('hide');
				totalButton.textContent = 'Заказать';
			});
		}
	});
});
