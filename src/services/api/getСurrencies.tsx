import axios from 'axios'

export async function getCurrencies(
	currencyList: string[],
	toCurrency: string,
	setCurrency
) {
	try {
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': process.env.REACT_APP_CURRENCIES_API_KEY,
				'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com',
			},
		}
		currencyList.forEach(async (currencyName) => {
			await axios
				.get(
					`https://currency-exchange.p.rapidapi.com/exchange?from=${currencyName}&to=${toCurrency}&q=1.0`,
					options
				)
				.then((response) => response.data)
				.then((data) => {
					const newObj = {
						currencyName: currencyName,
						currencyAmount: data.toFixed(2),
					}
					setCurrency((prev) => [...prev, newObj])
				})
		})
	} catch (error) {
		alert(`Failed to load currency! Error status: ${error}`)
	}
}

export default getCurrencies
