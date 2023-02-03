import { SetStateAction, Dispatch } from 'react'

export const baseUrl = 'http://localhost:8080'

export interface IsubscribeNews {
	setSubscribe: Dispatch<SetStateAction<string>>
	value: string
	setValue: Dispatch<SetStateAction<string>>
}
