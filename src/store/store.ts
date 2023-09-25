import {productsMock} from "../consts/products.ts";
import {productsOutOfStockMock} from "../consts/productsOutOfStock.ts";
import {Product} from "../types/products.ts";
import {getProductsNumMod} from "../ts/helpers/getProductsNumMod.ts";

export class Store {
	products: Product[];
	ids: string[];
	productsOutOfStock: Pick<Product, "id" | "img" | "name" | "options">[];
	productsNum: Record<string, number>;
	selectedProducts: string[];
	selectedCard: string;
	selectedAddress: string;
	productsFavorite: (Product | Pick<Product, 'id' | 'name' | 'img' | 'options'>)[];
	currency: string;

	constructor() {
		this.products = productsMock;
		this.ids = this.products.map(({ id }) => id);
		this.productsOutOfStock = productsOutOfStockMock;
		this.productsNum = {
			'product1': 1,
			'product2': 1,
			'product3': 1,
		};
		this.selectedProducts = [];
		this.selectedCard = 'card1';
		this.selectedAddress = 'userAddress2';
		this.productsFavorite = [];
		this.currency = this.products[0].currency;
	}

	getTotalPrice() {
		const productsNumMod = getProductsNumMod(this.productsNum, this.selectedProducts);

		return this.products.reduce((acc, { id, price }) => acc + (productsNumMod[id] * price), 0);
	}

	getTotalPrevPrice() {
		const productsNumMod = getProductsNumMod(this.productsNum, this.selectedProducts);

		return this.products.reduce((acc, { id, prevPrice }) => acc + (productsNumMod[id] * prevPrice), 0);
	}

	getTotalNum() {
		const productsNumMod = getProductsNumMod(this.productsNum, this.selectedProducts);

		return Object.values(productsNumMod).reduce((acc, curr) => acc + curr, 0);
	}

	removeProducts(id: string) {
		if (this.products.some(((product) => product.id === id))) {
			this.products = this.products.filter((product) => product.id !== id);
			this.ids = this.products.map(({ id }) => id);
			this.selectedProducts = this.selectedProducts.filter((el) => el !== id);
		} else {
			this.productsOutOfStock = this.productsOutOfStock.filter((product) => product.id !== id);
		}
	}

	setProductsFavorite(id: string) {
		if (this.products.some(((product) => product.id === id))) {
			const itemIndex = this.products.findIndex(((product) => product.id !== id));

			this.productsFavorite.push(this.products[itemIndex]);
			this.products = this.products.filter((product) => product.id !== id);
			this.ids = this.products.map(({ id }) => id);
			this.selectedProducts = this.selectedProducts.filter((el) => el !== id);
		} else {
			const itemIndex = this.productsOutOfStock.findIndex(((product) => product.id !== id));

			this.productsFavorite.push(this.productsOutOfStock[itemIndex]);
			this.productsOutOfStock = this.productsOutOfStock.filter((product) => product.id !== id);
		}
	}

	setSelectedProducts(id?: string) {
		if (!id) {
			this.selectedProducts = [...this.ids];
			return;
		}

		const selectedProductsSet = new Set(this.selectedProducts);
		selectedProductsSet.add(id);
		this.selectedProducts = Array.from(selectedProductsSet);
	}
	removeSelectedProducts(id?: string) {
		if (!id) {
			this.selectedProducts = [];
			return;
		}
		this.selectedProducts = this.selectedProducts.filter((el) => el !== id);
	}

	setSelectedCard(id: string) {
		this.selectedCard = id;
	}

	setSelectedAddress(id: string) {
		this.selectedAddress = id;
	}

	setProductsNum(key: string, value: number) {
		this.productsNum[key] = value;
	}
}

export const store = new Store();
