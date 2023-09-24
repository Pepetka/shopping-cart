import {Card} from "../../types/card.ts";
import mirImg from "../../assets/icons/Cards/Mir.svg";
import visaImg from "../../assets/icons/Cards/Visa.svg";
import mastercardImg from "../../assets/icons/Cards/Mastercard.svg";
import maestroImg from "../../assets/icons/Cards/Maestro.svg";

const cardsImg: Record<Card['type'], string> = {
	mir: mirImg,
	visa: visaImg,
	mastercard: mastercardImg,
	maestro: maestroImg,
}

export const userCardBase = ({ type, date, number  }: Card, withDate: boolean, additionalClass: string) => {
	return `
		<div class="paymentCard ${additionalClass}">
			<img class="paymentCard__paymentSystem" src="${cardsImg[type]}" alt="Payment system" />
			<span class="paymentCard__number">
				${withDate ? (
					`
						<span>${number}</span>
						<span>${date}</span>
					`
				) : (
					number
				)}
			</span>
		</div>
	`;
};
