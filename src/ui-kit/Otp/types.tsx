import { Dispatch, SetStateAction } from 'react'

export interface IOtp {
	amount: number
	validCode: string
	isValid?: boolean
	setIsValid?: Dispatch<SetStateAction<boolean>>
}
