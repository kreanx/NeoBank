import { MutableRefObject } from 'react'

export interface ISliderArrow {
	customStyle: string
	scrollHandler: (element, amount, direction) => void
	element: MutableRefObject<HTMLInputElement>
	reffer: MutableRefObject<HTMLInputElement>
	disabled: boolean
	direction: string
	amount: number
}
