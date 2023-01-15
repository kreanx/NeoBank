import styles from './Slider.module.scss'
import { useEffect, useState, useRef } from 'react'
import SliderArrow from 'ui-kit/Slider/SliderArrow/SliderArrow'
import { ISlider } from './types'
import SliderItem from 'ui-kit/Slider/SliderItem/SliderItem'

const Slider: React.FC<ISlider> = ({ items, mockImg }) => {
	const wrapperRef = useRef<HTMLInputElement>(null)
	const nextArrowRef = useRef<HTMLInputElement>(null)
	const prevArrowRef = useRef<HTMLInputElement>(null)
	const newsItemRef = useRef<HTMLInputElement>(null)
	const containerRef = useRef<HTMLInputElement>(null)

	const [blockSize, setBlockSize] = useState<number>(0)
	const [itemSize, setItemSize] = useState<number>(0)
	const [gap, setGap] = useState<number>(0)
	const [containerSize, setContainerSize] = useState<number>(0)

	const [isPrevDisabled, setPrevDisabled] = useState<boolean>(true)
	const [isNextDisabled, setNextDisabled] = useState<boolean>(false)

	const fullItemSize = itemSize + gap
	const fullLength = items.length * fullItemSize

	useEffect(() => {
		setBlockSize(wrapperRef.current.clientWidth)
		setGap(+window.getComputedStyle(wrapperRef.current).gap.replace('px', ''))
		setContainerSize(containerRef.current.clientWidth)
		setItemSize(newsItemRef.current.clientWidth)

		setPrevDisabled(true)

		if (items.length === 1) {
			setNextDisabled(true)
		}
	}, [items])

	const scroll = (item, scrollWidth, direction) => {
		const left = +window.getComputedStyle(item.current).left.replace('px', '')
		const quantityOfItems = containerSize / itemSize

		if (direction === 'next') {
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

		if (direction === 'prev') {
			if (left <= blockSize - itemSize * 2) {
				setNextDisabled(false)
			}

			if (left >= -scrollWidth) {
				item.current.style.left = 0
				setPrevDisabled(true)
				return
			}

			item.current.style.left = left + scrollWidth + 'px'
		}
	}

	const handleImgError = (e) => {
		e.target.src = mockImg
	}

	const testItem = (
		<div className={(styles.news__link, styles.none)}>
			<div className={styles.news__item} ref={newsItemRef}>
				<div className={styles.news__item_img}>
					<img
						className={styles.news__img}
						alt="newsImg"
						src={'item.img'}
					></img>
				</div>
				<h4 className={styles.news__item_title}>{'item.title'}</h4>
				<p className={styles.news__item_text}>
					<a
						className={styles.news__item_link}
						href={'item.url'}
						target="_blank"
						rel="noreferrer"
					>
						{'item.description'}
					</a>
				</p>
			</div>
		</div>
	)

	return (
		<>
			{testItem}
			<div className={styles.news__slider} ref={containerRef}>
				<div className={styles.news__items} ref={wrapperRef}>
					{items.map((item, i) => {
						return (
							<SliderItem
								key={i}
								handleImgError={handleImgError}
								i={i}
								item={item}
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
					direction={'prev'}
					element={wrapperRef}
					reffer={prevArrowRef}
					customStyle={styles.news__arrows_prev}
				/>
				<SliderArrow
					disabled={isNextDisabled}
					scrollHandler={scroll}
					amount={200}
					direction={'next'}
					element={wrapperRef}
					reffer={nextArrowRef}
					customStyle={styles.news__arrows_next}
				/>
			</div>
		</>
	)
}

export default Slider
