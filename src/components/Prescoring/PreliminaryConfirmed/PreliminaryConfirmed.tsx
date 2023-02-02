import styles from './PreliminaryConfirmed.module.scss'
import Container from 'ui-kit/Container/Container'

const PreliminaryConfirmed: React.FC = () => {
	return (
		<div id="scroll" className={styles.preliminaryConfirmed}>
			<Container>
				<div className={styles.preliminaryConfirmed__wrapper}>
					<h2 className={styles.preliminaryConfirmed__title}>
						The preliminary decision has been sent to your email.
					</h2>
					<h3 className={styles.preliminaryConfirmed__subtitle}>
						In the letter you can get acquainted with the preliminary decision
						on the credit card.
					</h3>
				</div>
			</Container>
		</div>
	)
}

export default PreliminaryConfirmed
