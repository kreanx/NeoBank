import { SetStateAction } from 'react'
import { Dispatch } from 'react'

export interface IsubscribeNews {
	setSubscribe: Dispatch<SetStateAction<string>>
	value: string
	setValue: Dispatch<SetStateAction<string>>
}
