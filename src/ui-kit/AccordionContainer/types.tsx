export interface TAccordionProps {
	title: string
	content: string
}

export interface TAccordionContainerProps {
	accordionItems: TAccordionProps[]
	initialValue?: number
}
