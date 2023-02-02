import { SetStateAction } from 'react'
import { Dispatch } from 'react'

export interface IApplicationId {
	setStep: Dispatch<SetStateAction<number>>
}
