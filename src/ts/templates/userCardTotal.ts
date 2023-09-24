import {userCardBase} from "./userCardBase.ts";
import {userCards} from "../../consts/userCards.ts";

export const userCardTotal = (selectedCard: string) => {
	const totalCardWrapper: HTMLDivElement = document.querySelector('.payment__cardWrapper')!;
	totalCardWrapper.innerHTML = userCardBase(userCards.find((card) => card.id === selectedCard)!, false, 'payment__card');
}
