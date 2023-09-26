export const getFormattedProductCount = (num: number) => {
	let lastDigit = num % 10;
	let lastTwoDigits = num % 100;

	if (lastDigit === 1 && lastTwoDigits !== 11) {
		return num + " товар";
	} else if (lastDigit >= 2 && lastDigit <= 4 && (lastTwoDigits < 10 || lastTwoDigits >= 20)) {
		return num + " товара";
	} else {
		return num + " товаров";
	}
};
