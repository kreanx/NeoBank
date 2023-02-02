import { Dispatch } from 'react'
import { SetStateAction } from 'react'
import localStorageHandler from 'services/localStorage/localStorageHandler'
import { baseUrl } from './types'

async function subscribeNews(
	setSubscribed: Dispatch<SetStateAction<boolean>>,
	value: string,
	setValue: Dispatch<SetStateAction<string>>
) {
	await fetch(`${baseUrl}/email`, {
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'POST',
		body: JSON.stringify({
			email: value,
		}),
	})
		.then((response) => {
			if (!response.ok) {
				return Promise.reject('Failed to send request!')
			}
		})
		.then(() => {
			localStorageHandler('isSubscribed', 'set', 'true')
			setSubscribed(true)
		})
		.catch((error) => {
			setValue('')
			alert(`Failed to send request! ${error}`)
		})
}

export default subscribeNews
