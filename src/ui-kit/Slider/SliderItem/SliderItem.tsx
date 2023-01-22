import styles from './SliderItem.module.scss'
import ISliderItem from './types'
import { useRef, useEffect } from 'react'

const SliderItem: React.FC<ISliderItem> = ({
	i,
	item,
	handleImgError,
	sizeHandler,
}) => {
	const innerItemSize = useRef<HTMLInputElement>(null)

	useEffect(() => {
		sizeHandler(innerItemSize.current.clientWidth)
	}, [])

	return (
		<div className={styles.news__link} key={i}>
			<div className={styles.news__item} ref={innerItemSize}>
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
}

export default SliderItem
