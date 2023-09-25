export const deleteAddress = () => {
	const modalAddresses = document.querySelectorAll<HTMLDivElement>('.modal__line[data-delete-address]');

	modalAddresses.forEach((addressElement) => {
		const deleteBtn: HTMLButtonElement = addressElement.querySelector('button[data-delete-address]')!;

		deleteBtn.addEventListener('click', () => {
			addressElement.remove();
		});
	});
};
