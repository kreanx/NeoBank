import styles from './Rates.module.scss'
import ratesContent from './Content'

const Rates: React.FC = () => {
	return (
		<div className={styles.rates}>
			{ratesContent.map((item, i) => {
				return (
					<div key={i} className={styles.rates__block}>
						<div className={styles.rates__block_title}>{item.title}</div>
						<div className={styles.rates__block_description}>{item.text}</div>
					</div>
				)
			})}
			<div className={styles.rates__block}>
				<div className={styles.rates__block_title}>Transaction Alert</div>
				<div className={styles.rates__block_description}>
					60 ₽ — SMS or push notifications
					<br />0 ₽ — card statement, information about transactions in the
					online bank
				</div>
			</div>
		</div>
	)
}

export default Rates
