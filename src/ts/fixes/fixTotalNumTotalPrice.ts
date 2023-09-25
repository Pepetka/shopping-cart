export const fixTotalNumTotalPrice = (num: number, totalPrice: number, currency: string) => {
	const normalHeader = document.querySelector('.goods__header_normal > span')!;
	normalHeader.textContent = `${num} товаров · ${totalPrice.toLocaleString('ru')} ${currency}`;
};
