import {userCardBase} from "../templates/userCardBase.ts";
import {store} from "../../store/store.ts";

export const renderUserCardMethod = () => {
	const cardWrapper: HTMLDivElement = document.querySelector('.orderDetails__cardWrapper')!;
	cardWrapper.innerHTML = userCardBase(store.cards.find((card) => card.id === store.selectedCard)!, true, 'orderDetails__card');
}
