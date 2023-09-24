import {Address} from "../types/address.ts";

export const userAddresses: Address[] = [
	{
		id: 'userAddress1',
		address: 'Бишкек, улица Табышалиева, 57',
		type: 'user'
	},
	{
		id: 'userAddress2',
		address: 'Бишкек, улица Жукеева-Пудовкина, 77/1',
		type: 'user'
	},
	{
		id: 'userAddress3',
		address: 'Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1',
		type: 'user'
	}
];

export const pointsAddresses: Address[] = [
	{
		id: 'pointAddress1',
		address: 'г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1',
		type: 'point'
	},
	{
		id: 'pointAddress2',
		address: 'г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1',
		type: 'point',
		rating: '4.99'
	},
	{
		id: 'pointAddress3',
		address: 'г. Бишкек, улица Табышалиева, д. 57',
		type: 'point',
		rating: '4.99'
	}
];
