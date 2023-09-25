import {getScrollbarWidth} from "../helpers/getScrollbarWidth.ts";
import {renderUserCardMethod} from "../render/renderUserCardMethod.ts";
import {renderUserCardTotal} from "../render/renderUserCardTotal.ts";
import {renderUserAddressMethod} from "../render/renderUserAddressMethod.ts";
import {renderUserAddressTotal} from "../render/renderUserAddressTotal.ts";
import {store} from "../../store/store.ts";

export const openModal = (modal: HTMLElement) => {
	modal.classList.remove('modal_hide');
	document.body.style.overflowY = 'hidden';
	document.body.style.marginRight = `${getScrollbarWidth()}px`;
}

export const closeModal = (element: HTMLElement, { selectedCard, selectedAddress }: { selectedCard?: string, selectedAddress?: string }) => {
	const modal: HTMLDivElement = element.closest('.modal')!;
	modal.classList.add('modal_hide');
	document.body.style.overflowY = 'auto';
	document.body.style.marginRight = '0';

	if (selectedCard) {
		renderUserCardMethod();
		renderUserCardTotal();
	}
	if (selectedAddress) {
		renderUserAddressMethod();
		renderUserAddressTotal();
	}
}

export const openCloseModals = () => {
	const modals = document.querySelectorAll<HTMLDivElement>('.modal');
	const modalButtons = document.querySelectorAll<HTMLButtonElement>('button[data-modal]');

	modalButtons.forEach((button) => {
		const modalType = button.dataset['modal'];

		button.addEventListener('click', () => {
			modals.forEach((modal) => {
				if (modal.dataset['modal'] !== modalType) return;

				openModal(modal);
			});
		});
	});

	const closeModals = document.querySelectorAll<HTMLDivElement>('.modal__overlay, .modal__close');
	closeModals.forEach((close) => {
		close.addEventListener('click', (event) => {
			event.stopPropagation();

			closeModal(close, { selectedCard: store.selectedCard, selectedAddress: store.selectedAddress });
		});
	});
};
