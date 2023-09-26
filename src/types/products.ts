export interface Product {
	id: string;
	name: string;
	img: string;
	price: number;
	currency: 'сом';
	prevPrice: number;
	priceDetails: {
		name: string;
		sale: number;
	}[]
	options?: Record<string, string>;
	company: string[];
	companyDetails: {
		name: string;
		ogrn: string;
		address: string;
	}
	totalQuantity: number;
	delivery: Delivery[];
	link: string;
}

export type ProductOutOfStock = Pick<Product, 'id' | 'name' | 'img' | 'options' | 'link'>;

interface Delivery {
	start: string;
	end: string;
	quantity: number;
}

export interface DataForMin {
	start: string;
	end: string;
	products: {
		id: string;
		quantity: number;
	}[]
}
