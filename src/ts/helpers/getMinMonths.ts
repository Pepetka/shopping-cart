import {monthsMin} from "../../const/months.ts";

export const getMinMonths = (date: string) => {
	const [dd, mm] = date.split(' ');

	if (!mm) return dd;

	return `${dd} ${monthsMin[mm]}`;
};
