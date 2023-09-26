import {store} from "../../store/store.ts";
import {validationError} from "./validationError.ts";

export const orderProducts = () => {
	const mediaQuery = window.matchMedia("(max-width: 768px)");
	const button: HTMLButtonElement = document.querySelector('.total__button')!;
	const inputBlocks = document.querySelectorAll<HTMLDivElement>('[data-form-block]');

	button.addEventListener('click', () => {
		const errors = store.getValidationErrors();

		inputBlocks.forEach((block) => {
			validationError(block, errors);
		});

		if (store.canIOrderProducts()) {
			alert(`Ordered products ids: ${JSON.stringify(store.getSelectedProductsWithNums())}\n` +
				`Total price: ${store.getTotalPrice()}\n` +
				`Payment card: ${store.selectedCardData}\n` +
				`Address: ${store.selectedAddress}\n` +
				`Pay immediately: ${store.payImmediately}`);
		} else if (mediaQuery.matches && store.hasValidationErrors()) {
			const customerForm: HTMLDivElement = document.querySelector('.orderDetails__customer')!;
			customerForm.scrollIntoView({ behavior: 'smooth' });
		} else if (mediaQuery.matches) {
			const orderDetails: HTMLDivElement = document.querySelector('.orderDetails')!;
			orderDetails.scrollIntoView({ behavior: 'smooth' });
		}
	});
};
