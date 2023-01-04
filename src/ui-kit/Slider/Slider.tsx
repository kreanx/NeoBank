import styles from './Slider.module.scss'
import { useEffect, useState, useRef } from 'react'
import SliderArrow from 'ui-kit/SliderArrow/SliderArrow'
import { TSlider } from './types'

const Slider: React.FC<TSlider> = ({ items, mockImg }) => {
	const wrapperRef = useRef(null)
	const nextArrowRef = useRef(null)
	const prevArrowRef = useRef(null)
	const newsItemRef = useRef(null)
	const containerRef = useRef(null)

	const [blockSize, setBlockSize] = useState(0)
	const [itemSize, setItemSize] = useState(0)
	const [gap, setGap] = useState(0)
	const [containerSize, setContainerSize] = useState(0)

	const [isPrevDisabled, setPrevDisabled] = useState(true)
	const [isNextDisabled, setNextDisabled] = useState(false)

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
						className={'news__item_link'}
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
							<div className={styles.news__link} key={i}>
								<div className={styles.news__item}>
									<div className={styles.news__item_img}>
										<img
											className={styles.news__img}
											alt="newsImg"
											src={item.img}
											onError={handleImgError}
										></img>
									</div>
									<h4 className={styles.news__item_title}>{item.title}</h4>
									<p className={styles.news__item_text}>
										<a
											className={styles.news__item_link}
											href={item.url}
											target="_blank"
											rel="noreferrer"
										>
											{item.description}
										</a>
									</p>
								</div>
							</div>
						)
					})}
				</div>
			</div>
			<div className={styles.news__arrows}>
				<SliderArrow
					disabled={isPrevDisabled}
					handler={scroll}
					amount={200}
					direction={'prev'}
					element={wrapperRef}
					reffer={prevArrowRef}
					customStyle={styles.news__arrows_prev}
				/>
				<SliderArrow
					disabled={isNextDisabled}
					handler={scroll}
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
