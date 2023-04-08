import { Dispatch, SetStateAction } from 'react'

interface IContent {
	number: string
	date: string
	total: string
	interest: string
	debt: string
	remaining: string
}

export interface ITable {
	content: IContent[]
	headers: string[]
	sortingHandler: Dispatch<SetStateAction<number>>
}

export interface ITableHeader {
	sortingHandler: Dispatch<SetStateAction<number>>
	styles: { [className: string]: string }
	item: string
	id: number
}
