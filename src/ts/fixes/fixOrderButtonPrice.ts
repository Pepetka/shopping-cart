import {store} from "../../store/store.ts";

export const fixOrderButtonPrice = () => {
	const payImmediately: HTMLInputElement = document.querySelector('.payment__immediately input')!;
	const totalButton: HTMLButtonElement = document.querySelector('.total__button')!;
	const immediatelyAdditions = document.querySelectorAll<HTMLDivElement>('.payment__immediately span, .card__additional');

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
}
