import styles from './OfferItem.module.scss'
import { IOfferItem } from './types'
import offerImg from 'img/loan/offerBox.png'
import { Button } from 'ui-kit/Button/Button'
import FormSuccess from 'img/tsIcons/FormSuccess'
import FormError from 'img/tsIcons/FormError'
import { useAppDispatch } from 'hook'
import { mainNextStep } from 'store/slices/mainStepSlice'

const OfferItem: React.FC<IOfferItem> = ({
	isInsurance,
	isSalary,
	monthly,
	rate,
	time,
	total,
	requested,
	id,
	applyOffer,
	setIsLoading,
}) => {
	const dispatch = useAppDispatch()

	return (
		<div className={styles.offerItem}>
			<div className={styles.offerItem__img}>
				<img src={offerImg} alt="offer" />
			</div>
			<ul className={styles.offerItem__fields}>
				<li className={styles.offerItem__field}>
					Requested amount: {requested}
				</li>
				<li className={styles.offerItem__field}>Total amount: {total}</li>
				<li className={styles.offerItem__field}>{time}</li>
				<li className={styles.offerItem__field}>Monthly payment: {monthly}</li>
				<li className={styles.offerItem__field}>Your rate: {rate}</li>
				<li className={styles.offerItem__field}>
					Insurance included
					{isInsurance ? <FormSuccess /> : <FormError />}
				</li>
				<li className={styles.offerItem__field}>
					Salary client
					{isSalary ? <FormSuccess /> : <FormError />}
				</li>
			</ul>
			<Button
				label="Select"
				customStyle={styles.offerItem__button}
				onClick={() => {
					setIsLoading(true)
					applyOffer(id, setIsLoading)
					dispatch(mainNextStep())
				}}
			/>
		</div>
	)
}

export default OfferItem
