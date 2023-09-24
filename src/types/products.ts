export interface Product {
	id: string;
	name: string;
	img: string;
	price: number;
	currency: 'сом';
	prevPrice: number;
	options?: Record<string, string>;
	company: string[];
	totalQuantity: number;
	delivery: Delivery[]
}

interface Delivery {
	start: string;
	end: string,
	quantity: number,
}

export interface DataForMin {
	start: string;
	end: string;
	products: {
		id: string;
		quantity: number
	}[]
}
