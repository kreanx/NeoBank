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
interface IPrescoringField extends FormikProps<IFormValues> {
	styles: { [className: string]: string }
	name: string
	placeHolder: string
	label: string
	options?: string[]
	required?: boolean
	maxLength?: number
}

export default IPrescoringField
