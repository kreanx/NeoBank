import { FormikProps } from 'formik'

interface IFormValues {
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
interface IApplicationValues {
	gender: string
	maritalStatus: string
	dependentAmount: string
	passportIssueDate: string
	passportIssueBranch: string
	employmentStatus: string
	employerINN: string
	salary: string
	position: string
	workExperienceTotal: string
	workExperienceCurrent: string
}
export interface IPrescoringField
	extends FormikProps<IFormValues | IApplicationValues> {
	name: string
	placeHolder: string
	label: string
	options?: string[]
	required?: boolean
	maxLength?: number
	isDate?: boolean
	isOnlyDigits?: boolean
	customHandler?: (e) => void
	wrapperStyle?: { [className: string]: string }
}
