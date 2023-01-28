const prescoringContent = [
	{
		label: 'Your last name',
		name: 'lastName',
		placeHolder: 'For Example Doe',
		required: true,
	},
	{
		label: 'Your first name',
		name: 'firstName',
		placeHolder: 'For Example John',
		required: true,
	},
	{
		label: 'Your middleName',
		name: 'middleName',
		placeHolder: 'For Example Victorovich',
		required: false,
	},
	{
		label: 'Select term',
		name: 'term',
		placeHolder: '6 month',
		options: ['6 month', '12 month', '18 month', '24 month'],
		required: false,
	},
	{
		label: 'Your email',
		name: 'email',
		placeHolder: 'test@gmail.com',
		required: true,
	},
	{
		label: 'Your date of birthdate',
		name: 'birthdate',
		placeHolder: 'Select Date and Time',
		required: true,
		maxLength: 4,
		isDate: true,
	},
	{
		label: 'Your passport series',
		name: 'passportSeries',
		placeHolder: '0000',
		required: true,
		maxLength: 4,
		isOnlyDigits: true,
	},
	{
		label: 'Your passport number',
		name: 'passportNumber',
		placeHolder: '000000',
		required: true,
		maxLength: 6,
		isOnlyDigits: true,
	},
]

export default prescoringContent
