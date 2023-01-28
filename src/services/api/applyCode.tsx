import { Dispatch, SetStateAction } from 'react'

async function applyCode(
	setIsLoading: Dispatch<SetStateAction<boolean>>,
	id: string | number
) {
	await fetch(`/document/${id}}/code`, {
		method: 'POST',
	})
		.then((response) => {
			if (!response.ok) {
				return Promise.reject('Failed to send request!')
			}
			response.json()
		})
		.then((data) => {
			setIsLoading(false)
			console.log('You are sent request:', data)
		})
		.catch((error) => {
			setIsLoading(false)
			console.error('Error:', error)
			alert('Failed to send request!')
		})
}

export default applyCode
