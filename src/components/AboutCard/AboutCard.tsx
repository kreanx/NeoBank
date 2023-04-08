import styles from './AboutCard.module.scss'
import aboutCardContent from './Content'

const AboutCard: React.FC = () => {
	return (
		<div className={styles.about}>
			{aboutCardContent.map((item, i) => {
				return (
					<div key={i} className={styles.about__item}>
						<div className={styles.about__item_img}>{item.img}</div>
						<h3 className={styles.about__item_title}>{item.title}</h3>
						<p className={styles.about__item_text}>{item.text}</p>
					</div>
				)
			})}
		</div>
	)
}

export default AboutCard
