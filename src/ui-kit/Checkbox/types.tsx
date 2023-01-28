export interface ICheckbox {
	checked: boolean
	label?: string
	name: string
	value: string
	onChange: () => void
	customStyle?: string
}
