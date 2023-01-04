export interface TButton {
	label: string
	onClick?: () => void
	disabled?: boolean
	customStyle?: string
	children?: React.ReactNode
}
