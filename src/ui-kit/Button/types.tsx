export interface IButton {
	label: string
	onClick?: () => void
	disabled?: boolean
	customStyle?: string
	children?: React.ReactNode
	type?: 'button' | 'submit' | 'reset'
}
