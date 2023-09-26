import {ProductOutOfStock} from "../types/products.ts";
import productImg1 from "../assets/images/product1.png";
import productImg2 from "../assets/images/product2.png";
import productImg3 from "../assets/images/product3.png";

export const productsOutOfStockMock: ProductOutOfStock[] = [
	{
		id: 'productOutOfStock1',
		name: 'Футболка UZcotton мужская',
		img: productImg1,
		options: {
			'Цвет': 'белый',
			'Размер': '56',
		},
		link: '#'
	},
	{
		id: 'productOutOfStock2',
		name: 'Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe',
		img: productImg2,
		options: {
			'Цвет': 'прозрачный',
		},
		link: '#'
	},
	{
		id: 'productOutOfStock3',
		name: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell',
		img: productImg3,
		link: '#'
	}
];
