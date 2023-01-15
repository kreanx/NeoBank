import styles from './Rates.module.scss'

const Rates: React.FC = () => {
	return (
		<div className={styles.rates}>
			<div className={styles.rates__block}>
				<div className={styles.rates__block_title}>Card currency</div>
				<div className={styles.rates__block_description}>
					Rubles, dollars, euro
				</div>
			</div>
			<div className={styles.rates__block}>
				<div className={styles.rates__block_title}>Interest free period</div>
				<div className={styles.rates__block_description}>0% up to 160 days</div>
			</div>
			<div className={styles.rates__block}>
				<div className={styles.rates__block_title}>Payment system</div>
				<div className={styles.rates__block_description}>Mastercard, Visa</div>
			</div>
			<div className={styles.rates__block}>
				<div className={styles.rates__block_title}>
					Maximum credit limit on the card
				</div>
				<div className={styles.rates__block_description}>600 000 ₽</div>
			</div>
			<div className={styles.rates__block}>
				<div className={styles.rates__block_title}>
					Replenishment and withdrawal
				</div>
				<div className={styles.rates__block_description}>
					At any ATM. Top up your credit card for free with cash or transfer
					from other cards
				</div>
			</div>
			<div className={styles.rates__block}>
				<div className={styles.rates__block_title}>Max cashback per month</div>
				<div className={styles.rates__block_description}>15 000 ₽</div>
			</div>
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
