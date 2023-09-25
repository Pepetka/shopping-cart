import starImg from "../../assets/icons/Star.svg";
import {Address} from "../../types/address.ts";

export const userAddressBase = ({ address, rating, information, type }: Address, additionalClass = '', additionalClassRating = '', text?: string) => {
	return `
		<span class="address ${additionalClass}">
			<span class="address__data">${address}</span>
			${type === 'point' ? (
				`
					<span class="address__details ${additionalClassRating}">
						<span class="address__rating">
							<img class="address__star" src="${starImg}" alt="Rating" />
							${rating ?? ''}
						</span>
						${text ?? information}
					</span>
				`
			) : ''}
		</span>
	`;
};
