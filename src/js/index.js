document.addEventListener('DOMContentLoaded', () => {
	const accordionToggles = document.querySelectorAll('.goods__toggle');
	const accordions = document.querySelectorAll('.accordion');

	accordionToggles.forEach((toggle) => {
		toggle.addEventListener('click', (event) => {
			const data = toggle.dataset.accordion;

			accordions.forEach((accordion) => {
				if (accordion.dataset.accordion === data) {
					return accordion.classList.toggle('accordion__close')
				}
			})
		})
	})
})
