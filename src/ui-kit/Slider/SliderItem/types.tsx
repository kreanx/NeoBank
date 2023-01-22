import { SyntheticEvent } from 'react'
import { IItem } from '../types'

interface ISliderItem {
	i: number
	item: IItem
	handleImgError: (e: SyntheticEvent<HTMLImageElement, Event>) => void
	sizeHandler: (e: number) => void
}

export default ISliderItem
