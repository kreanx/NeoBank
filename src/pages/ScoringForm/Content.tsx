export const applicationIdBaseContent = [
	{
		label: 'Whats your gender',
		name: 'gender',
		options: ['MALE', 'FAMALE'],
		required: true,
	},
	{
		label: 'Your marital status',
		name: 'maritalStatus',
		options: ['MARRIED', 'DIVORCED', 'SINGLE', 'WIDOW_WIDOWER'],
		required: true,
	},
	{
		label: 'Your number of dependents',
		name: 'dependentAmount',
		options: ['1', '2', '3'],
		required: true,
	},
	{
		label: 'Date of issue of the passport',
		name: 'passportIssueDate',
		placeHolder: 'Select Date and Time',
		required: true,
		maxLength: 4,
		isDate: true,
	},
	{
		label: 'Division code',
		name: 'passportIssueBranch',
		placeHolder: '000000',
		required: true,
		maxLength: 6,
		isOnlyDigits: true,
	},
]
export const applicationIdEmploymentContent = [
	{
		label: 'Your employment status',
		name: 'employmentStatus',
		options: ['UNEMPLOYED', 'SELF_EMPLOYED', 'EMPLOYED', 'BUSINESS_OWNER'],
		required: true,
	},
	{
		label: 'Your employer INN',
		name: 'employerINN',
		placeHolder: '000000000000',
		required: true,
		maxLength: 12,
		isOnlyDigits: true,
	},
	{
		label: 'Your salary',
		name: 'salary',
		placeHolder: 'For example 100 000',
		required: true,
		isOnlyDigits: true,
	},
	{
		label: 'Your position',
		name: 'position',
		options: ['WORKER', 'MID_MANAGER', 'TOP_MANAGER', 'OWNER'],
		required: true,
	},
	{
		label: 'Your work experience total',
		name: 'workExperienceTotal',
		placeHolder: 'For example 10',
		required: true,
		maxLength: 2,
		isOnlyDigits: true,
	},
	{
		label: 'Your work experience current',
		name: 'workExperienceCurrent',
		placeHolder: 'For example 2',
		required: true,
		maxLength: 2,
		isOnlyDigits: true,
	},
]