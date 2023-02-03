import axios from 'axios'
import { Dispatch, SetStateAction } from 'react'
import localStorageHandler from 'services/localStorage/localStorageHandler'
import { baseUrl } from './types'

async function subscribeNews(
	setSubscribed: Dispatch<SetStateAction<boolean>>,
	value: string,
	setValue: Dispatch<SetStateAction<string>>
) {
	await axios
		.post(`${baseUrl}/email`, { email: value })
		.then((response) => {
			if (response.status > 300) {
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
