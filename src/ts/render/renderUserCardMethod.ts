import {userCardBase} from "../templates/userCardBase.ts";
import {userCards} from "../../consts/userCards.ts";
import {store} from "../../store/store.ts";

export const renderUserCardMethod = () => {
	const cardWrapper: HTMLDivElement = document.querySelector('.orderDetails__cardWrapper')!;
	cardWrapper.innerHTML = userCardBase(userCards.find((card) => card.id === store.selectedCard)!, true, 'orderDetails__card');
}
