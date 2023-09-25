import {store} from "../../store/store.ts";
import {closeModal} from "./modals.ts";

export const selectPaymentCard = () => {
	const paymentForm: HTMLFormElement = document.querySelector('[data-modal="payment"] .paymentForm')!;
	paymentForm.addEventListener('submit', (event) => {
		event.preventDefault();

		const formData = new FormData(paymentForm);
		const formProps = Object.fromEntries(formData) as { card: string };

		store.setSelectedCard(formProps.card);
		closeModal(paymentForm);
	});
};
