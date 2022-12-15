function loadCurrency(toCurrency) {
    const currencyTags = document.querySelectorAll('.exchange__currency-text')

    function getCurrency(tags) {
        tags.forEach(async (tag) => {
            const currencyName = tag.textContent.split(':')[0]
            let currencyExchange = 0

            currencyExchange = await getOneCurrency(currencyName, toCurrency)

            tag.nextElementSibling.innerText = currencyExchange.toFixed(2)
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
            .catch(err => console.error(err));

        return currencyExchange
    }

    getCurrency(currencyTags, toCurrency)
}

