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
		priceDetails: [
			{
				name: 'Скидка 48%',
				sale: 505,
			},
			{
				name: 'Скидка покупателя 2%',
				sale: 24
			}
		],
		options: {
			'Цвет': 'белый',
			'Размер': '56',
		},
		company: ['Коледино WB', 'OOO Вайлдберриз'],
		companyDetails: {
			name: 'OOO «ВАЙЛДБЕРРИЗ»',
			ogrn: 'ОГРН: 5167746237148',
			address: '129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис ОГРН: 516774623714834',
		},
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
		],
		link: '#'
	},
	{
		id: 'product2',
		name: 'Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe',
		img: productImg2,
		price: 10500,
		currency: 'сом',
		prevPrice: 11500,
		priceDetails: [
			{
				name: 'Скидка 7%',
				sale: 770,
			},
			{
				name: 'Скидка покупателя 2%',
				sale: 230
			}
		],
		options: {
			'Цвет': 'прозрачный',
		},
		company: ['Коледино WB', 'OOO Мегапрофстиль'],
		companyDetails: {
			name: 'OOO «МЕГАПРОФСТИЛЬ»',
			ogrn: 'ОГРН: 5167746237148',
			address: '129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис ОГРН: 516774623714834',
		},
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
		],
		link: '#'
	},
	{
		id: 'product3',
		name: `Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные,<br/>Faber-Castell`,
		img: productImg3,
		price: 247,
		currency: 'сом',
		prevPrice: 457,
		priceDetails: [
			{
				name: 'Скидка 44%',
				sale: 201,
			},
			{
				name: 'Скидка покупателя 2%',
				sale: 9
			}
		],
		company: ['Коледино WB', 'OOO Вайлдберриз'],
		companyDetails: {
			name: 'OOO «ВАЙЛДБЕРРИЗ»',
			ogrn: 'ОГРН: 5167746237148',
			address: '129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис ОГРН: 516774623714834',
		},
		totalQuantity: 2,
		delivery: [
			{
				start: '05.02.2023',
				end: '06.02.2023',
				quantity: 2,
			},
		],
		link: '#'
	}
];
