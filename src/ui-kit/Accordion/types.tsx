export interface IAccordionProps {
	title: string
	content: string
}

export interface IAccordionContainerProps {
	accordionItems: IAccordionProps[]
	initialValue?: number
}
