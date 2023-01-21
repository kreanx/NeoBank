import { FormikErrors, FormikTouched } from 'formik'
import { ChangeEvent, FocusEvent } from 'react'

interface IErrorsPool {
	amount: string
	lastName: string
	firstName: string
	middleName: string
	term: string
	email: string
	birthdate: string
	passportSeries: string
	passportNumber: string
}

interface IPrescoringField {
	styles: { [className: string]: string }
	handleChange: {
		(e: ChangeEvent<any>): void
		<T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any>
			? void
			: (e: string | ChangeEvent<any>) => void
	}
	handleBlur: {
		(e: FocusEvent<any, Element>): void
		<T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void
	}
	errors: FormikErrors<IErrorsPool>
	touched: FormikTouched<IErrorsPool>
	values: IErrorsPool
	name: string
	placeHolder: string
	label: string
	options?: string[]
	required?: boolean
	maxLength?: number
}

export default IPrescoringField
