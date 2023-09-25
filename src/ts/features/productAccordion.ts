import {fixTotalNumTotalPrice} from "../fixes/fixTotalNumTotalPrice.ts";

export const productAccordion = () => {
	const accordionToggles: NodeListOf<HTMLElement> = document.querySelectorAll('.goods__toggle');
	const accordions: NodeListOf<HTMLElement> = document.querySelectorAll('.accordion');

	accordionToggles.forEach((toggle) => {
		toggle.addEventListener('click', () => {
			const data = toggle.dataset.accordion;

			fixTotalNumTotalPrice();

			toggle.classList.toggle('goods__toggle_rotate');

			if (data === 'normal') {
				toggle.parentElement!.classList.toggle('goods__header_close');
			}

			accordions.forEach((accordion) => {
				if (accordion.dataset.accordion === data) {
					return accordion.classList.toggle('accordion__close');
				}
			});
		});
	});
};
