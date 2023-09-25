import {userCardBase} from "../templates/userCardBase.ts";
import {store} from "../../store/store.ts";

export const renderUserCardTotal = () => {
	const totalCardWrapper: HTMLDivElement = document.querySelector('.payment__cardWrapper')!;
	totalCardWrapper.innerHTML = userCardBase(store.cards.find((card) => card.id === store.selectedCard)!, false, 'payment__card');
}
