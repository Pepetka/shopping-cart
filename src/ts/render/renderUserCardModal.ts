import {userCards} from "../../consts/userCards.ts";
import {userCardBase} from "../templates/userCardBase.ts";

export const renderUserCardModal = (selectedCard: string) => {
	const paymentModalBody: HTMLDivElement = document.querySelector('.paymentForm__body')!;
	paymentModalBody.innerHTML = userCards.reduce((acc, curr) => acc + `
		<label class="radio paymentForm__radio">
			<input type="radio" value="${curr.id}" name="card" ${selectedCard === curr.id ? 'checked' : ''}>
			${userCardBase(curr, false, 'modal__paymentCard')}
		</label>
	`, ``);
}
