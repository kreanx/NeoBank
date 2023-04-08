import styles from './OfferItem.module.scss'
import offerImg from 'img/loan/offerBox.png'
import { Button } from 'ui-kit/Button/Button'
import FormSuccess from 'img/tsIcons/FormSuccess'
import FormError from 'img/tsIcons/FormError'
import { useAppDispatch } from 'hook'
import { mainNextStep } from 'store/slices/mainStepSlice'
import localStorageHandler from 'services/localStorage/localStorageHandler'
import { IOfferItem } from './types'
import { regOnlyDigits } from 'services/regexp'

const OfferItem: React.FC<IOfferItem> = ({
	applicationId,
	rate,
	time,
	isInsuranceEnabled,
	isSalaryClient,
	monthlyPayment,
	requestedAmount,
	totalAmount,
	applyOffer,
	setIsLoading,
}) => {
	const dispatch = useAppDispatch()

	const formatMoney = (amount: number) => {
		return new Intl.NumberFormat('ru-RU').format(amount)
	}

	async function submitOffer() {
		setIsLoading(true)

		const selectedOffer = {
			applicationId,
			rate,
			term: time.replace(regOnlyDigits, ''),
			isInsuranceEnabled,
			isSalaryClient,
			monthlyPayment,
			requestedAmount,
			totalAmount,
		}
		const data = await applyOffer(setIsLoading, selectedOffer)

		if (data) {
			localStorageHandler('offers', 'remove')
			localStorageHandler('application', 'set', JSON.stringify(selectedOffer))
			dispatch(mainNextStep())
		}
	}

	return (
		<div className={styles.offerItem}>
			<div className={styles.offerItem__img}>
				<img src={offerImg} alt="offer" />
			</div>
			<ul className={styles.offerItem__fields}>
				<li className={styles.offerItem__field}>
					Requested amount: {formatMoney(+requestedAmount)} ₽
				</li>
				<li className={styles.offerItem__field}>
					Total amount: {formatMoney(+totalAmount)} ₽
				</li>
				<li className={styles.offerItem__field}>{time}</li>
				<li className={styles.offerItem__field}>
					Monthly payment: {formatMoney(+monthlyPayment)} ₽
				</li>
				<li className={styles.offerItem__field}>Your rate: {rate} %</li>
				<li className={styles.offerItem__field}>
					Insurance included
					{isInsuranceEnabled ? <FormSuccess /> : <FormError />}
				</li>
				<li className={styles.offerItem__field}>
					Salary client
					{isSalaryClient ? <FormSuccess /> : <FormError />}
				</li>
			</ul>
			<Button
				label="Select"
				customStyle={styles.offerItem__button}
				onClick={submitOffer}
			/>
		</div>
	)
}

export default OfferItem
