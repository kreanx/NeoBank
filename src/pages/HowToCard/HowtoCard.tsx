import Container from 'ui-kit/Container/Container'
import styles from './HowToCard.module.scss'

const HowToCard: React.FC = () => {
	return (
		<div className={styles.howto}>
			<Container>
				<div className={styles.howto__wrapper}>
					<h2 className={styles.howto__title}>How to get a card</h2>
					<div className={styles.howto__blocks}>
						<div className={styles.howto__block}>
							<div className={styles.howto__block_top}>
								<div className={styles.howto__count}>1</div>
								<div className={styles.howto__divider}></div>
							</div>
							<div className={styles.howto__block_content}>
								<p className={styles.howto__text}>
									Fill out an online application - you do not need to visit the
									bank
								</p>
							</div>
						</div>
						<div className={styles.howto__block}>
							<div className={styles.howto__block_top}>
								<div className={styles.howto__count}>2</div>
								<div className={styles.howto__divider}></div>
							</div>
							<div className={styles.howto__block_content}>
								<p className={styles.howto__text}>
									Find out the banks decision immediately after filling out the
									application
								</p>
							</div>
						</div>
						<div className={styles.howto__block}>
							<div className={styles.howto__block_top}>
								<div className={styles.howto__count}>3</div>
								<div className={styles.howto__divider}></div>
							</div>
							<div className={styles.howto__block_content}>
								<p className={styles.howto__text}>
									The bank will deliver the card free of charge, wherever
									convenient, to your city
								</p>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default HowToCard
