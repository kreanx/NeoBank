import styles from './SliderItem.module.scss'
import ISliderItem from './types'

const SliderItem: React.FC<ISliderItem> = ({ i, item, handleImgError }) => {
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
}

export default SliderItem
