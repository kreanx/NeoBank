interface TAccordionItem {
	title: string
	content: string
	initialValue?: boolean
	isOpen: boolean
	openHandler: (id: number) => void
	index: number
}

export default TAccordionItem
