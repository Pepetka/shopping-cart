import {UserData} from "../../types/userData.ts";
import {validateName} from "./validateName.ts";
import {validateEmail} from "./validateEmail.ts";
import {validatePhoneNumber} from "./validatePhoneNumber.ts";
import {validateINN} from "./validateINN.ts";
import {validateSurname} from "./validationSurname.ts";

export const validateField = (name: keyof UserData, value: string, withEmptyErrors = true) => {
	switch (name) {
		case "name":
			return validateName(value, withEmptyErrors);
		case "surname":
			return validateSurname(value, withEmptyErrors);
		case "email":
			return validateEmail(value, withEmptyErrors);
		case "phone":
			return validatePhoneNumber(value, withEmptyErrors);
		case "INN":
			return validateINN(value, withEmptyErrors);
	}
};
