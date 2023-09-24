import {Product} from "../types/products.ts";
import productImg1 from "../assets/images/product1.png";
import productImg2 from "../assets/images/product2.png";
import productImg3 from "../assets/images/product3.png";

export const productsMock: Product[] = [
	{
		id: 'product1',
		name: 'Футболка UZcotton мужская',
		img: productImg1,
		price: 522,
		currency: 'сом',
		prevPrice: 1051,
		options: {
			'Цвет': 'белый',
			'Размер': '56',
		},
		company: ['Коледино WB', 'OOO Вайлдберриз'],
		totalQuantity: 2,
		delivery: [
			{
				start: '05.02.2023',
				end: '06.02.2023',
				quantity: 1,
			},
			{
				start: '27.02.2023',
				end: '01.03.2023',
				quantity: 1,
			}
		]
	},
	{
		id: 'product2',
		name: 'Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe',
		img: productImg2,
		price: 10500,
		currency: 'сом',
		prevPrice: 11500,
		options: {
			'Цвет': 'прозрачный',
		},
		company: ['Коледино WB', 'OOO Мегапрофстиль'],
		totalQuantity: 300,
		delivery: [
			{
				start: '05.02.2023',
				end: '06.02.2023',
				quantity: 184,
			},
			{
				start: '07.02.2023',
				end: '08.02.2023',
				quantity: 116,
			}
		]
	},
	{
		id: 'product3',
		name: `Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные,<br/>Faber-Castell`,
		img: productImg3,
		price: 247,
		currency: 'сом',
		prevPrice: 457,
		company: ['Коледино WB', 'OOO Вайлдберриз'],
		totalQuantity: 2,
		delivery: [
			{
				start: '05.02.2023',
				end: '06.02.2023',
				quantity: 2,
			},
		]
	}
];
