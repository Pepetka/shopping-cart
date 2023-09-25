import {userCardBase} from "../templates/userCardBase.ts";
import {userCards} from "../../consts/userCards.ts";
import {store} from "../../store/store.ts";

export const renderUserCardTotal = () => {
	const totalCardWrapper: HTMLDivElement = document.querySelector('.payment__cardWrapper')!;
	totalCardWrapper.innerHTML = userCardBase(userCards.find((card) => card.id === store.selectedCard)!, false, 'payment__card');
}
