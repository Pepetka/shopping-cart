import {userCardBase} from "./userCardBase.ts";
import {userCards} from "../../consts/userCards.ts";

export const userCardMethod = (selectedCard: string) => {
	const cardWrapper: HTMLDivElement = document.querySelector('.orderDetails__cardWrapper')!;
	cardWrapper.innerHTML = userCardBase(userCards.find((card) => card.id === selectedCard)!, true, 'orderDetails__card');
}
