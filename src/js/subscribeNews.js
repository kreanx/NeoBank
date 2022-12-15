function subscribeNews() {
    const form = document.querySelector('.support__input')
    const input = document.querySelector('.support__input-input')

    const isSubscribed = window.localStorage.getItem('isSubscribed')

    function hideInput() {
        const button = document.querySelector('.support__button')
        const text = document.querySelector('.support__subscribed')

        input.style.display = 'none'
        button.style.display = 'none'
        text.style.display = 'inline'
    }

    if (isSubscribed) {
        hideInput()

        return
    }

    async function sendEmail(email) {
        await fetch('/email', {
            method: 'POST',
            body: JSON.stringify(email),
        })
            .then(response => {
                if (!response.ok) {
                    return Promise.reject('Failed to send request!', response)
                }
                response.json()
            })
            .then(data => {
                console.log('You are subscribed:', data)
                window.localStorage.setItem('isSubscribed', true)
                hideInput()
            })
            .catch(error => {
                console.error('Error:', error)
                alert('Failed to send request!')
            })
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        const email = input.value
        sendEmail(email)
    })
}

export default subscribeNews