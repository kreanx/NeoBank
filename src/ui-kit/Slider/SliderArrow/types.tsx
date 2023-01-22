import { MutableRefObject } from 'react'

export interface ISliderArrow {
	customStyle: string
	scrollHandler: (
		element: MutableRefObject<HTMLInputElement>,
		amount: number,
		direction: string
	) => void
	element: MutableRefObject<HTMLInputElement>
	refer: MutableRefObject<HTMLInputElement>
	disabled: boolean
	direction: string
	amount: number
}
