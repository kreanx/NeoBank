const Content = [
	{
		label: 'Your last name',
		name: 'lastName',
		placeHolder: 'For Example Doe',
		type: 'text',
		reqired: true,
	},
	{
		label: 'Your first name',
		name: 'firstName',
		placeHolder: 'For Example John',
		type: 'text',
		reqired: true,
	},
	{
		label: 'Your middleName',
		name: 'middleName',
		placeHolder: 'For Example Victorovich',
		type: 'text',
		reqired: false,
	},
	{
		label: 'Select term',
		name: 'term',
		placeHolder: '6 month',
		type: 'select',
		options: ['6 month', '12 month', '18 month', '24 month'],
		reqired: false,
	},
	{
		label: 'Your email',
		name: 'email',
		placeHolder: 'test@gmail.com',
		type: 'email',
		reqired: true,
	},
	{
		label: 'Your date of birthdate',
		name: 'birthdate',
		placeHolder: 'Select Date and Time',
		type: 'date',
		reqired: true,
	},
]

export default Content
