"use strict";
import {renderProducts} from "./render/renderProducts.ts";
import {renderOutOfStockProducts} from "./render/renderOutOfStockProducts.ts";
import {renderMiniProducts} from "./render/renderMiniProducts.ts";
import {fixProductsNum} from "./fixes/fixProductsNum.ts";
import {fixOutOfStockNum} from "./fixes/fixOutOfStockNum.ts";
import {fixTotalNumTotalPrice} from "./fixes/fixTotalNumTotalPrice.ts";
import {renderUserCardModal} from "./render/renderUserCardModal.ts";
import {renderUserCardMethod} from "./render/renderUserCardMethod.ts";
import {renderUserCardTotal} from "./render/renderUserCardTotal.ts";
import {renderUserAddressModal} from "./render/renderUserAddressModal.ts";
import {renderUserAddressMethod} from "./render/renderUserAddressMethod.ts";
import {renderUserAddressTotal} from "./render/renderUserAddressTotal.ts";
import {productAccordion} from "./features/productAccordion.ts";
import {productCheckboxes} from "./features/productCheckboxes.ts";
import {changeProductsQuantity} from "./features/changeProductsQuantity.ts";
import {deleteFavoriteProducts, deleteFavoriteProductsOOS} from "./features/deleteFavoriteProducts.ts";
import {openCloseModals} from "./features/modals.ts";
import {selectPaymentCard} from "./features/selectPaymentCard.ts";
import {payImmediately} from "./features/payImmediately.ts";
import {selectAddress} from "./features/selectAddress.ts";
import {deleteAddress} from "./features/deleteAddress.ts";
import {fixDeliveryDate} from "./fixes/fixDeliveryDate.ts";
import {fixTotalPrev, fixTotalPrice, fixTotalSale} from "./fixes/fixTotal.ts";
import {store} from "../store/store.ts";

document.addEventListener('DOMContentLoaded', () => {
	// отрисовка товаров
	const productsElements = renderProducts();
	const productsOutOfStockElements = renderOutOfStockProducts();
	renderMiniProducts();

	// установка необходимых значений
	fixProductsNum();
	fixOutOfStockNum();
	fixTotalNumTotalPrice();
	fixDeliveryDate();
	fixTotalPrice(store.getTotalPrice(), store.currency);
	fixTotalPrev(store.getTotalNum(), store.getTotalPrevPrice(), store.currency);
	fixTotalSale(store.getTotalPrice(), store.getTotalPrevPrice(), store.currency);

	renderUserCardModal();
	renderUserCardMethod();
	renderUserCardTotal();

	renderUserAddressModal();
	renderUserAddressMethod();
	renderUserAddressTotal();

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
	selectPaymentCard();

	// оплатить сразу
	payImmediately();

	// выбор адреса
	selectAddress();

	// удаление адресов
	deleteAddress();
});

