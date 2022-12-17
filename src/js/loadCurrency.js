function loadCurrency(toCurrency) {
    const wrapper = document.querySelector('.exchange__currency')

    const currencyList = ['USD', 'EUR', 'SGD', 'JPY', 'CNH', 'HKD']

    function render(currency, exchange) {
        return `
            <div class="exchange__currency-block">
                <div class="exchange__currency-text">${currency}:&nbsp;</div>
                <div class="exchange__currency-amount">${typeof exchange === 'number' ? exchange.toFixed(2) : 'N/A'}</div>
            </div>
        `
    }

    function getCurrency(currencies, toCurrency) {
        currencies.forEach(async (currency) => {
            let currencyExchange = 0

            currencyExchange = await getOneCurrency(currency, toCurrency)
            wrapper.innerHTML += render(currency, currencyExchange)
        })
    }

    async function getOneCurrency(currencyName, toCurrency) {
        let currencyExchange = 0

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '141fc98f46msh353d93f5a1e571bp195a88jsn81da51edfbf5',
                'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
            }
        };

        await fetch(`https://currency-exchange.p.rapidapi.com/exchange?from=${currencyName}&to=${toCurrency}&q=1.0`, options)
            .then(response => response.json())
            .then(response => {
                currencyExchange = response
            })
            .catch(error => console.error(error));

        return currencyExchange
    }

    getCurrency(currencyList, toCurrency)
}

