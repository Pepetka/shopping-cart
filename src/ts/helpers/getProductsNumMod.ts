export const getProductsNumMod = (productsNum: Record<string, number>, selectedProducts: string[]): Record<string, number> => {
	return Object.entries(productsNum)
		.map(([key, value]) => selectedProducts.includes(key) ? [key, value] : [key, 0])
		.reduce((acc, [key, value]) => ({...acc, [key]: value}), {})
}
