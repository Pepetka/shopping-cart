import {store} from "../../store/store.ts";

export const payImmediately = () => {
	const payImmediately: HTMLInputElement = document.querySelector('.payment__immediately input')!;
	const immediatelyAdditions = document.querySelectorAll<HTMLDivElement>('.payment__immediately span, .card__additional');

	payImmediately.addEventListener('click', () => {
		const totalButton: HTMLButtonElement = document.querySelector('.total__button')!;

		if (payImmediately.checked) {
			immediatelyAdditions.forEach((additions) => {
				additions.classList.add('hide');
				totalButton.textContent = `Оплатить ${store.getTotalPrice().toLocaleString('ru')} ${store.currency}`;
			});
			store.setPayImmediately(true);
		} else {
			immediatelyAdditions.forEach((additions) => {
				additions.classList.remove('hide');
				totalButton.textContent = 'Заказать';
			});
			store.setPayImmediately(false);
		}
	});
};
