import {productsMock} from "../consts/products.ts";
import {productsOutOfStockMock} from "../consts/productsOutOfStock.ts";
import {Product} from "../types/products.ts";
import {getProductsNumMod} from "../ts/helpers/getProductsNumMod.ts";
import {Address} from "../types/address.ts";
import {userAddresses} from "../consts/userAddresses.ts";
import {UserData} from "../types/userData.ts";
import {ValidationsError} from "../types/validationErrors.ts";
import {userCards} from "../consts/userCards.ts";
import {Card} from "../types/card.ts";
import {validateField} from "../ts/helpers/validateField.ts";

export class Store {
	products: Product[];
	ids: string[];
	productsOutOfStock: Pick<Product, "id" | "img" | "name" | "options">[];
	productsNum: Record<string, number>;
	addresses: Address[];
	cards: Card[];
	selectedProducts: string[];
	selectedCard: string;
	selectedAddress: string;
	productsFavorite: (Product | Pick<Product, 'id' | 'name' | 'img' | 'options'>)[];
	currency: string;
	payImmediately: boolean;
	userData: UserData;
	validationErrors: ValidationsError;
	selectedCardData: Card;
	selectedAddressData: Address;

	constructor() {
		this.products = productsMock;
		this.ids = this.products.map(({ id }) => id);
		this.productsOutOfStock = productsOutOfStockMock;
		this.productsNum = this.ids.reduce((acc, id) => ({ ...acc, [id]: 1 }), {});
		this.addresses = userAddresses;
		this.cards = userCards;
		this.selectedProducts = [];
		this.selectedCard = 'card1';
		this.selectedAddress = 'userAddress2';
		this.productsFavorite = [];
		this.currency = this.products[0].currency;
		this.payImmediately = false;
		this.userData = {
			name: '',
			surname: '',
			email: '',
			phone: '',
			INN: '',
		};
		this.validationErrors = {
			name: null,
			surname: null,
			email: null,
			phone: null,
			INN: null,
		};
		this.selectedCardData = userCards.find((card) => card.id === this.selectedCard)!;
		this.selectedAddressData = userAddresses.find((address) => address.id === this.selectedAddress)!;
	}

	getValidationErrors() {
		Object.entries(this.userData).forEach(([key, value]) => {
			this.validationErrors[key as keyof UserData] = validateField(key as keyof UserData, value);
		});

		return this.validationErrors;
	}

	setUserData(key: string, value: string) {
		this.userData[key as keyof UserData] = value;

		this.validationErrors[key as keyof UserData] = validateField(key as keyof UserData, value, false);
	}

	setPayImmediately(flag: boolean) {
		this.payImmediately = flag;
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

	getSelectedProductsWithNums() {
		return this.selectedProducts
			.reduce((acc, product) => ({ ...acc, [product]: this.productsNum[product] }), {});
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
		this.selectedCardData = userCards.find((card) => card.id === this.selectedCard)!;
	}

	setSelectedAddress(id: string) {
		this.selectedAddress = id;
		this.selectedAddressData = userAddresses.find((address) => address.id === this.selectedAddress)!;
	}

	setProductsNum(key: string, value: number) {
		this.productsNum[key] = value;
	}

	removeAddress(id: string) {
		this.addresses = this.addresses.filter((address) => address.id !== id);
	}

	canIOrderProducts() {
		return Object.values(this.validationErrors).every((el) => !el) &&
			this.selectedProducts.length > 0 &&
			this.selectedCard &&
			this.selectedAddress
	}
}

export const store = new Store();
