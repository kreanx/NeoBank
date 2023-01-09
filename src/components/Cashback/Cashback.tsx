import styles from './Cashback.module.scss'

const Cashback: React.FC = () => {
	return (
		<div className={styles.cashback}>
			<div className={styles.cashback__block}>
				<div className={styles.cashback__title}>
					For food delivery, cafes and restaurants
				</div>
				<div className={styles.cashback__text}>5%</div>
			</div>
			<div className={styles.cashback__block}>
				<div className={styles.cashback__title}>
					In supermarkets with our subscription
				</div>
				<div className={styles.cashback__text}>5%</div>
			</div>
			<div className={styles.cashback__block}>
				<div className={styles.cashback__title}>
					In clothing stores and childrens goods
				</div>
				<div className={styles.cashback__text}>2%</div>
			</div>
			<div className={styles.cashback__block}>
				<div className={styles.cashback__title}>
					Other purchases and payment of services and fines
				</div>
				<div className={styles.cashback__text}>1%</div>
			</div>
			<div className={styles.cashback__block}>
				<div className={styles.cashback__title}>Shopping in online stores</div>
				<div className={styles.cashback__text}>up to 3%</div>
			</div>
			<div className={styles.cashback__block}>
				<div className={styles.cashback__title}>
					Purchases from our partners
				</div>
				<div className={styles.cashback__text}>30%</div>
			</div>
		</div>
	)
}

export default Cashback
