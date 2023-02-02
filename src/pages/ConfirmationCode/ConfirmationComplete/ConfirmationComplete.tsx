import { Button } from 'ui-kit/Button/Button'
import Container from 'ui-kit/Container/Container'
import styles from './ConfirmationComplete.module.scss'
import { Link } from 'react-router-dom'
import { routes } from 'services/routes'
import congratulationsImg from 'img/loan/offerBox.png'
import { useAppDispatch } from 'hook'
import { mainDefaultStep } from 'store/slices/mainStepSlice'
import localStorageHandler from 'services/localStorage/localStorageHandler'

const ConfirmationComplete: React.FC = () => {
	const dispatch = useAppDispatch()

	const applyHandler = () => {
		dispatch(mainDefaultStep())
		localStorageHandler('application', 'remove')
	}

	return (
		<div className={styles.confirmation}>
			<Container>
				<div className={styles.confirmation__wrapper}>
					<div className={styles.confirmation__img}>
						<img src={congratulationsImg} alt="confirmed" />
					</div>
					<h2 className={styles.confirmation__title}>
						Congratulations! You have completed your new credit card.
					</h2>
					<h3 className={styles.confirmation__subtitle}>
						Your credit card will arrive soon. Thank you for choosing us!
					</h3>
					<Link to={routes.home}>
						<Button
							label="View other offers of our bank"
							customStyle={styles.confirmation__btn}
							onClick={applyHandler}
						/>
					</Link>
				</div>
			</Container>
		</div>
	)
}

export default ConfirmationComplete
