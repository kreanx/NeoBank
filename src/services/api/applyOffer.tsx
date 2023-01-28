import { Dispatch, SetStateAction } from 'react'

async function applyOffer(
	value: number,
	setIsLoading: Dispatch<SetStateAction<boolean>>
) {
	setIsLoading(true)
	await fetch('/application/apply', {
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
			setIsLoading(false)
			console.log('You are subscribed:', data)
		})
		.catch((error) => {
			console.log('Error:', error)
			alert('Failed to send request!')
			setIsLoading(false)
		})
}

export default applyOffer
