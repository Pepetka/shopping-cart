import {userCardBase} from "../templates/userCardBase.ts";
import {store} from "../../store/store.ts";

export const renderUserCardModal = () => {
	const paymentModalBody: HTMLDivElement = document.querySelector('.paymentForm__body')!;
	paymentModalBody.innerHTML = store.cards.reduce((acc, curr) => acc + `
		<label class="radio paymentForm__radio">
			<input type="radio" value="${curr.id}" name="card" ${store.selectedCard === curr.id ? 'checked' : ''}>
			${userCardBase(curr, false, 'modal__paymentCard')}
		</label>
	`, ``);
}
