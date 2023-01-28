import { Dispatch, SetStateAction } from 'react'

interface IContent {
	number: string
	date: string
	total: string
	interest: string
	debt: string
	remaining: string
}
interface IHeaders {
	value: string
	id: string
}

export interface ITable {
	content: IContent[]
	headers: IHeaders[]
	sortingHandler: Dispatch<SetStateAction<string>>
}

export interface ITableHeader {
	sortingHandler: Dispatch<SetStateAction<string>>
	styles: { [className: string]: string }
	item: IHeaders
}
