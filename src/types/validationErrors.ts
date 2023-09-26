import {UserData} from "./userData.ts";

export enum NameValidationError {
	EMPTY = 'Укажите имя',
	WRONG = 'Укажите имя'
}
export enum SurnameValidationError {
	EMPTY = 'Введите фамилию',
	WRONG = 'Введите фамилию'
}
export enum EmailValidationError {
	EMPTY = 'Укажите электронную почту',
	WRONG = 'Проверьте адрес электронной почты'
}
export enum PhoneValidationError {
	EMPTY = 'Укажите номер телефона',
	WRONG = 'Формат: +9 999 999 99 99'
}
export enum INNValidationError {
	EMPTY = 'Укажите ИНН',
	WRONG = 'Проверьте ИНН'
}
export type ValidationsError = {
	[key in keyof UserData]: NameValidationError | SurnameValidationError | EmailValidationError | PhoneValidationError | INNValidationError | null
}
