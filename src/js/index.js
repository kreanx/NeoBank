window.addEventListener('DOMContentLoaded', () => {
    const toCurrency = 'RUB'
    const intervalTime = 90000

    loadCurrency(toCurrency)
    loadNews()

    setInterval(() => {
        loadCurrency(toCurrency)
        loadNews()
    }, intervalTime)
})

