import { SetStateAction, Dispatch } from 'react'

export const baseUrl = 'http://localhost:8080'

export interface ISubscribeNews {
	setSubscribe: Dispatch<SetStateAction<string>>
	value: string
	setValue: Dispatch<SetStateAction<string>>
}

export interface IGetApplicationStatus {
	id: number
	client: {
		firstName: string
		lastName: string
		middleName: string
		email: string
		gender: string
		birthdate: string
		passportSeries: string
		passportNumber: string
		passportIssueDate: string
		passportIssueBranch: string
		maritalStatus: string
		dependentAmount: number
		employment: {
			employmentStatus: string
			employerINN: string
			salary: number
			position: string
			workExperienceTotal: number
			workExperienceCurrent: number
		}
		account: string
	}
	credit: {
		amount: number
		term: number
		monthlyPayment: number
		rate: number
		psk: number
		isInsuranceEnabled: boolean
		isSalaryClient: boolean
		paymentSchedule: [
			{
				number: number
				date: string
				totalPayment: number
				interestPayment: number
				debtPayment: number
				remainingDebt: number
			}
		]
	}
	status: string
	creationDate: string
	signDate: string
	sesCode: string
	statusHistory: [
		{
			status: string
			time: string
			changeType: string
		}
	]
}
