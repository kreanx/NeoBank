import Container from 'ui-kit/Container/Container'
import howToCardContent from './content'
import styles from './HowToCard.module.scss'

const HowToCard: React.FC = () => {
	return (
		<div className={styles.howto}>
			<Container>
				<div className={styles.howto__wrapper}>
					<h2 className={styles.howto__title}>How to get a card</h2>
					<div className={styles.howto__blocks}>
						{howToCardContent.map((item, i) => {
							return (
								<div key={i} className={styles.howto__block}>
									<div className={styles.howto__block_top}>
										<div className={styles.howto__count}>{item.count}</div>
										<div className={styles.howto__divider}></div>
									</div>
									<div className={styles.howto__block_content}>
										<p className={styles.howto__text}>{item.text}</p>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</Container>
		</div>
	)
}

export default HowToCard
