import { Dispatch } from 'react'
import { SetStateAction } from 'react'
import localStorageHandler from 'services/localStorage/localStorageHandler'

async function subscribeNews(
	setSubscribed: Dispatch<SetStateAction<boolean>>,
	value: string,
	setValue: Dispatch<SetStateAction<string>>
) {
	await fetch('/email', {
		method: 'POST',
		body: JSON.stringify(value),
	})
		.then((response) => {
			if (!response.ok) {
				return Promise.reject('Failed to send request!')
			}
			response.json()
		})
		.then((data) => {
			localStorageHandler('isSubscribed', 'set', 'true')
			setSubscribed(true)
			console.log('You are subscribed:', data)
		})
		.catch((error) => {
			setValue('')
			console.error('Error:', error)
			alert('Failed to send request!')
		})
}

export default subscribeNews
