import styles from './Cashback.module.scss'
import cashbackContent from './Content'

const Cashback: React.FC = () => {
	return (
		<div className={styles.cashback}>
			{cashbackContent.map((item, i) => {
				return (
					<div key={i} className={styles.cashback__block}>
						<div className={styles.cashback__title}>{item.title}</div>
						<div className={styles.cashback__text}>{item.text}</div>
					</div>
				)
			})}
		</div>
	)
}

export default Cashback
