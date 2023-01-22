export interface IItem {
	img: string
	title: string
	url: string
	description: string
}

export interface ISlider {
	items: IItem[]
	mockImg: string
}

export const enum directions {
	prev = 'prev',
	next = 'next',
}
