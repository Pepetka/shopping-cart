export const fixOutOfStockNum = (num: number) => {
	const outOfStockHeader = document.querySelector('.goods__header_outOfStock > span')!;
	outOfStockHeader.textContent = `Отсутствуют · ${num} товара`;
};
