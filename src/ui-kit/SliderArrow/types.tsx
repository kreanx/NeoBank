import { MutableRefObject } from 'react'

export interface TSliderArrow {
	customStyle: string
	handler: (element, amount, direction) => void
	element: MutableRefObject<null>
	reffer: MutableRefObject<null>
	disabled: boolean
	direction: string
	amount: number
}
