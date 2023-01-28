import { SetStateAction } from 'react'
import { Dispatch } from 'react'

export interface IOffers {
	setStep: Dispatch<SetStateAction<number>>
}
