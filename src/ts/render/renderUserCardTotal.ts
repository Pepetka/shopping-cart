import {userCardBase} from "../templates/userCardBase.ts";
import {userCards} from "../../consts/userCards.ts";

export const renderUserCardTotal = (selectedCard: string) => {
	const totalCardWrapper: HTMLDivElement = document.querySelector('.payment__cardWrapper')!;
	totalCardWrapper.innerHTML = userCardBase(userCards.find((card) => card.id === selectedCard)!, false, 'payment__card');
}
