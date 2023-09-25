import {store} from "../../store/store.ts";

export const fixProductsNum = () => {
	const headerNotification = document.querySelector('.header__notification')!;
	headerNotification.textContent = `${store.products.length}`;

	const tabbarNotification = document.querySelector('.tabbar__notification')!;
	tabbarNotification.textContent = `${store.products.length}`;
};
