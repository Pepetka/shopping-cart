export interface Address {
	id: string,
	address: string,
	type: 'user' | 'point',
	rating?: string;
	information?: string,
	price?: string;
}
