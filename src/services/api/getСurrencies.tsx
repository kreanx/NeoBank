async function getСurrencies(
	currencyList: string[],
	toCurrency: string,
	setCurrency
) {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '141fc98f46msh353d93f5a1e571bp195a88jsn81da51edfbf5',
			'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com',
		},
	}

	currencyList.forEach((currencyName) => {
		fetch(
			`https://currency-exchange.p.rapidapi.com/exchange?from=${currencyName}&to=${toCurrency}&q=1.0`,
			options
		)
			.then((response) => response.json())
			.then((response) => {
				const newObj = {
					currencyName: currencyName,
					currencyAmount: response.toFixed(2),
				}
				setCurrency((prev) => [...prev, newObj])
			})
			.catch((error) => console.error(error))
	})
}

export default getСurrencies
