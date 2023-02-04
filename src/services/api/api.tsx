import axios from 'axios'
import { IOffer } from 'components/Offers/OfferItem/types'
import { SetStateAction, Dispatch } from 'react'
import { IgetApplicationStatus } from './types'

const instance = axios.create({
	baseURL: 'http://localhost:8080',
	headers: {
		'Content-Type': 'application/json',
	},
})

const failureStatus = 300

export async function applyOffer(
	setIsLoading: Dispatch<SetStateAction<boolean>>,
	data
) {
	try {
		const response = await instance
			.post('application/apply', data)
			.then((response) => {
				setIsLoading(false)
				return response.status < failureStatus
			})

		return response
	} catch (error) {
		setIsLoading(false)
		alert(`Failed to send request! ${error}`)
	}
}

export async function applyApplication(
	setIsLoading: Dispatch<SetStateAction<boolean>>,
	data,
	id: string | number
) {
	try {
		const response = await instance
			.put(`application/registration/${id}`, data)
			.then((response) => {
				setIsLoading(false)
				return response.status < failureStatus
			})

		return response
	} catch (error) {
		setIsLoading(false)
		alert(`Failed to send request! ${error}`)
	}
}

export async function applyCode(
	setIsLoading: Dispatch<SetStateAction<boolean>>,
	id: string | number,
	code: string | number
) {
	try {
		const response = await instance
			.post(`document/${id}/sign/code`, code)
			.then((response) => {
				setIsLoading(false)
				return response.status < failureStatus
			})

		return response
	} catch (error) {
		setIsLoading(false)
		alert(`Failed to send request! ${error}`)
	}
}

export async function applyDocuments(
	setIsLoading: Dispatch<SetStateAction<boolean>>,
	id: string | number
) {
	try {
		const response = await instance.post(`/document/${id}`).then((response) => {
			setIsLoading(false)
			return response.status < failureStatus
		})

		return response
	} catch (error) {
		setIsLoading(false)
		alert(`Failed to send request! ${error}`)
	}
}
export async function applyPrescoringForm(
	setIsLoading: Dispatch<SetStateAction<boolean>>,
	data
): Promise<IOffer> {
	try {
		const response = await instance
			.post('application', data)
			.then((response) => {
				setIsLoading(false)
				return response.data
			})

		return response
	} catch (error) {
		setIsLoading(false)
		alert(`Failed to send request! ${error}`)
	}
}

export async function applySign(
	setIsLoading: Dispatch<SetStateAction<boolean>>,
	id: string | number
) {
	try {
		const response = await instance
			.post(`document/${id}/sign`)
			.then((response) => {
				setIsLoading(false)
				return response.status < failureStatus
			})

		return response
	} catch (error) {
		setIsLoading(false)
		alert(`Failed to send request! ${error}`)
	}
}

export async function getApplicationStatus(
	id: string | number
): Promise<IgetApplicationStatus> {
	try {
		const response = await instance
			.get(`admin/application/${id}`)
			.then((response) => {
				return response.data
			})

		return response
	} catch (error) {
		alert(`Failed to send request! ${error}`)
	}
}
