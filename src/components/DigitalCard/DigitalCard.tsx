import styles from './DigitalCard.module.scss'
import card from '../../img/loan/card.png'
import Container from 'ui-kit/Container/Container'
import { Button } from 'ui-kit/Button/Button'
import Tooltip from 'ui-kit/Tooltip/Tooltip'

const DigitalCard: React.FC = () => {
	return (
		<section className={styles.digital}>
			<Container>
				<div className={styles.digital__wrapper}>
					<div className={styles.digital__block}>
						<h2 className={styles.digital__title}>
							Platinum digital credit card
						</h2>
						<h3 className={styles.digital__subtitle}>
							Our best credit card. Suitable for everyday spending and shopping.
							<br />
							Cash withdrawals and transfers without commission and interest.
						</h3>
						<div className={styles.digital__benefits}>
							<div className={styles.digital__benefit}>
								<div className={styles.digital__benefit_title}>
									Up to 160 days
								</div>
								<div className={styles.digital__benefit_subtitle}>
									<Tooltip
										label="No percent"
										content="When repaying the full debt up to 160 days."
									/>
								</div>
							</div>
							<div className={styles.digital__benefit}>
								<div className={styles.digital__benefit_title}>
									Up to 600 000 ₽
								</div>
								<div className={styles.digital__benefit_subtitle}>
									<Tooltip
										label="Credit limit"
										content="Over the limit willaccrue percent"
									/>
								</div>
							</div>
							<div className={styles.digital__benefit}>
								<div className={styles.digital__benefit_title}>0 ₽</div>
								<div className={styles.digital__benefit_subtitle}>
									<Tooltip
										label="Card service is free"
										content="Promotion valid until December 31, 2022."
									/>
								</div>
							</div>
						</div>
						<a href="#form" className={styles.digital__anchor}>
							<Button
								label="Apply for card"
								customStyle={styles.digital__btn}
							/>
						</a>
					</div>
					<div className={styles.digital__block}>
						<div className={styles.digital__img}>
							<img src={card} alt="card" />
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}

export default DigitalCard
