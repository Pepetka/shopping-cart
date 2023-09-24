export interface Card {
	id: string,
	type: 'mir' | 'visa' | 'mastercard' | 'maestro',
	number: '1234 56•• •••• 1234',
	date: string,
}
