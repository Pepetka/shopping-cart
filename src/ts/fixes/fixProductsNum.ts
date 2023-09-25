export const fixProductsNum = (num: number) => {
	const headerNotification = document.querySelector('.header__notification')!;
	headerNotification.textContent = `${num}`;

	const tabbarNotification = document.querySelector('.tabbar__notification')!;
	tabbarNotification.textContent = `${num}`;
};
