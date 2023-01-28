import * as Yup from 'yup'

const age = 18
const year = 100

const checkAge = () => {
	const now = new Date()
	return new Date(now.setFullYear(now.getFullYear() - age))
}

export const validTime = () => {
	const now = new Date()
	return new Date(now.setFullYear(now.getFullYear() - year))
}

export const PrescoringSchema = Yup.object().shape({
	firstName: Yup.string().required('Cant be empty!'),
	lastName: Yup.string().required('Cant be empty!'),
	middleName: Yup.string()
		.min(2, 'Middle name is too Short!')
		.max(20, 'Middle name is too Long!'),
	term: Yup.string().required('Cant be empty!'),
	birthdate: Yup.date()
		.min(validTime(), 'Please enter a valid date')
		.max(checkAge(), 'You must be at least 18 years old!')
		.required('Cant be empty!')
		.typeError('Please enter a valid date'),
	passportSeries: Yup.number()
		.required('Cant be empty!')
		.min(1000, 'Passport series must be 4 digits!')
		.typeError('Passport series must be only in digits!'),
	passportNumber: Yup.number()
		.required('Cant be empty!')
		.min(100000, 'Passport number must be 6 digits!')
		.typeError('Passport number must be only in digits!'),
	email: Yup.string().email('Invalid email').required('Cant be empty!'),
	amount: Yup.number()
		.min(15000, 'Minimum amount - 15 000!')
		.max(600000, 'Maximum amount - 600 000!')
		.typeError('Amount must be only in digits!'),
})
