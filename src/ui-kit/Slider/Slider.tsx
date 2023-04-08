import styles from './Slider.module.scss'
import { useEffect, useState, useRef, MutableRefObject } from 'react'
import SliderArrow from 'ui-kit/Slider/SliderArrow/SliderArrow'
import { directions, ISlider } from './types'
import SliderItem from 'ui-kit/Slider/SliderItem/SliderItem'

const Slider: React.FC<ISlider> = ({ items, mockImg }) => {
	const wrapperRef = useRef<HTMLInputElement>(null)
	const nextArrowRef = useRef<HTMLInputElement>(null)
	const prevArrowRef = useRef<HTMLInputElement>(null)
	const containerRef = useRef<HTMLInputElement>(null)

	const [blockSize, setBlockSize] = useState<number>(0)
	const [itemSize, setItemSize] = useState<number>(0)
	const [gap, setGap] = useState<number>(0)
	const [containerSize, setContainerSize] = useState<number>(0)
	const [innerItemSize, setInnerItemSize] = useState<number>(0)

	const [isPrevDisabled, setPrevDisabled] = useState<boolean>(true)
	const [isNextDisabled, setNextDisabled] = useState<boolean>(false)

	const fullItemSize = itemSize + gap
	const fullLength = items.length * fullItemSize

	useEffect(() => {
		setBlockSize(wrapperRef.current.clientWidth)
		setGap(+window.getComputedStyle(wrapperRef.current).gap.replace('px', ''))
		setContainerSize(containerRef.current.clientWidth)
		setItemSize(innerItemSize)
		setPrevDisabled(true)

		if (items.length === 1) {
			setNextDisabled(true)
		}
	}, [items, innerItemSize])

	const scroll = (
		item: MutableRefObject<HTMLInputElement>,
		scrollWidth: number,
		direction: string
	) => {
		const left = +window.getComputedStyle(item.current).left.replace('px', '')
		const quantityOfItems = containerSize / itemSize

		if (direction === directions.next) {
			if (left === 0) {
				setPrevDisabled(false)
			}

			if ((fullLength - -left) / itemSize <= quantityOfItems) {
				item.current.style.left =
					-(fullLength - fullItemSize * quantityOfItems + fullItemSize) + 'px'
				setNextDisabled(true)
				return
			}

			item.current.style.left = left - scrollWidth + 'px'
		}

		if (direction === directions.prev) {
			if (left <= blockSize - itemSize * 2) {
				setNextDisabled(false)
			}

			if (left >= -scrollWidth) {
				item.current.style.left = '0'
				setPrevDisabled(true)
				return
			}

			item.current.style.left = left + scrollWidth + 'px'
		}
	}

	const handleImgError = (e) => {
		e.target.src = mockImg
	}

	return (
		<>
			<div className={styles.news__slider} ref={containerRef}>
				<div className={styles.news__items} ref={wrapperRef}>
					{items.map((item, i) => {
						return (
							<SliderItem
								key={i}
								handleImgError={handleImgError}
								i={i}
								item={item}
								sizeHandler={setInnerItemSize}
							/>
						)
					})}
				</div>
			</div>
			<div className={styles.news__arrows}>
				<SliderArrow
					disabled={isPrevDisabled}
					scrollHandler={scroll}
					amount={200}
					direction={directions.prev}
					element={wrapperRef}
					refer={prevArrowRef}
					customStyle={styles.news__arrows_prev}
				/>
				<SliderArrow
					disabled={isNextDisabled}
					scrollHandler={scroll}
					amount={200}
					direction={directions.next}
					element={wrapperRef}
					refer={nextArrowRef}
					customStyle={styles.news__arrows_next}
				/>
			</div>
		</>
	)
}

export default Slider
