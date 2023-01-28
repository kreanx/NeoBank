import { SetStateAction } from 'react'
import { Dispatch } from 'react'

export interface IPrescoring {
	setStep: Dispatch<SetStateAction<number>>
	setIsSended: Dispatch<SetStateAction<string>>
}
