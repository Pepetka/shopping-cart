import {fixOrderButtonPrice} from "../fixes/fixOrderButtonPrice.ts";

export const payImmediately = () => {
	const payImmediately: HTMLInputElement = document.querySelector('.payment__immediately input')!;

	payImmediately.addEventListener('click', () => {
		fixOrderButtonPrice()
	});
};
