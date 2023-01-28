import { Dispatch, SetStateAction } from 'react'

export interface IOfferItem {
	requested: string
	total: string
	time: string
	monthly: string
	rate: string
	isInsurance: boolean
	isSalary: boolean
	id: number
	applyOffer: (
		id: number,
		setLoading: Dispatch<SetStateAction<boolean>>
	) => void
	setIsLoading: Dispatch<SetStateAction<boolean>>
}
