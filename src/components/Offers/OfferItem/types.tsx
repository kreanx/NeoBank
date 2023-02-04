import { SetStateAction, Dispatch } from 'react'

export interface ILocalOffer {
	applicationId: number
	rate: string
	term: string
	isInsuranceEnabled: boolean
	isSalaryClient: boolean
	monthlyPayment: string
	requestedAmount: string
	totalAmount: string
}

export interface IOffer {
	requestedAmount: string
	totalAmount: string
	time: string
	monthlyPayment: string
	rate: string
	isInsuranceEnabled: boolean
	isSalaryClient: boolean
	applicationId: number
}
export interface IOfferItem extends IOffer {
	applyOffer: (
		setLoading: Dispatch<SetStateAction<boolean>>,
		data: ILocalOffer
	) => Promise<boolean>
	setIsLoading: Dispatch<SetStateAction<boolean>>
}
