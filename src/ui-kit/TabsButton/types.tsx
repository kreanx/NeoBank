interface ITabsButton {
	style?: string
	activeStyle: string
	id: string
	isActive: string
	label: string
	activeHandler: (id: string) => void
}

export default ITabsButton
