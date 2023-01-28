import * as Yup from 'yup'

const year = 100
const now = 0

export const validTime = (year: number) => {
	const now = new Date()
	return new Date(now.setFullYear(now.getFullYear() - year))
}

export const ApplicationSchema = Yup.object().shape({
	gender: Yup.string().required('Cant be empty!'),
	maritalStatus: Yup.string().required('Cant be empty!'),
	dependentAmount: Yup.string().required('Cant be empty!'),
	passportIssueDate: Yup.date()
		.required('Cant be empty!')
		.typeError('Please enter a valid date')
		.min(validTime(year), 'Please enter a valid date')
		.max(validTime(now), 'Please enter a valid date'),
	passportIssueBranch: Yup.number()
		.required('Cant be empty!')
		.min(100000, 'Division code must be 6 digits minimum!')
		.typeError('Division code must be only in digits!'),
	employmentStatus: Yup.string().required('Cant be empty!'),
	employerINN: Yup.number()
		.required('Cant be empty!')
		.min(100000000000, 'Your INN series must be 12 digits!')
		.typeError('Your INN series must bee only in digits!'),
	salary: Yup.number()
		.typeError('Amount must be only in digits!')
		.required('Cant be empty!'),
	position: Yup.string()
		.typeError('Amount must be only in digits!')
		.required('Cant be empty!'),
	workExperienceTotal: Yup.number()
		.typeError('Amount must be only in digits!')
		.required('Cant be empty!'),
	workExperienceCurrent: Yup.number()
		.typeError('Amount must be only in digits!')
		.required('Cant be empty!'),
})
