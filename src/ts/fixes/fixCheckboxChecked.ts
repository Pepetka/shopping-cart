export const fixCheckboxChecked = (selectedProducts: string[]) => {
	const allCheckbox: HTMLInputElement = document.querySelector('[data-product-list-checkbox]')!;
	const productCards: NodeListOf<HTMLElement> = document.querySelectorAll('[data-product]');

	allCheckbox.checked = true;

	productCards.forEach((product) => {
		const id = product.dataset['product'] ?? '';
		const checkbox: HTMLInputElement = product.querySelector('.checkbox input')!;

		checkbox.checked = selectedProducts.includes(id);

		if (!checkbox.checked) {
			allCheckbox.checked = false;
		}
	});
};
