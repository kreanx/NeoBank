import { Checkbox } from 'ui-kit/Checkbox/Checkbox'
import Container from 'ui-kit/Container/Container'
import styles from './TablePage.module.scss'
import { useState, useEffect } from 'react'
import { Button } from 'ui-kit/Button/Button'
import Modal from 'components/Modal/Modal'
import { useNavigate, useParams } from 'react-router-dom'
import { routes } from 'services/routes'
import { useAppDispatch, useAppSelector } from 'hook'
import { mainDefaultStep, mainNextStep } from 'store/slices/mainStepSlice'
import NotFound from 'pages/NotFound/NotFound'
import StepComplete from 'components/StepComplete/StepComplete'
import Loader from 'ui-kit/Loader/Loader'
import { applyDocuments } from 'services/api/api'
import { getApplicationStatus } from 'services/api/api'
import localStorageHandler from 'services/localStorage/localStorageHandler'
import TableDocument from './TableDocument/TableDocument'

const TablePage: React.FC = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [schedule, setSchedule] = useState<boolean>(false)
	const [isDeny, setIsDeny] = useState<boolean>(false)
	const [isDenied, setIsDenied] = useState<boolean>(false)
	const applicationId = useParams()
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const mainState = useAppSelector((state) => state.mainStepReducer.current)
	const localId = JSON.parse(
		localStorageHandler('application', 'get')
	)?.applicationId

	const additionalStateId = 3

	useEffect(() => {
		async function getStatus() {
			let status = await getApplicationStatus(applicationId.applicationId)
			status = status?.status

			if (status === 'CC_DENIED' || status === 'CLIENT_DENIED') {
				dispatch(mainDefaultStep())
				localStorageHandler('application', 'remove')
			}
		}
		getStatus()
	}, [])

	const scheduleHandler = () => {
		setSchedule((prev) => !prev)
	}

	const denyHandler = () => {
		setIsDeny(true)
	}
	const cancelHandler = () => {
		setIsDeny(false)
	}
	const sureDenyHandler = () => {
		setIsDeny(false)
		setIsDenied(true)
	}

	const deniedConfirm = () => {
		localStorageHandler('application', 'remove')
		dispatch(mainDefaultStep())
		navigate(routes.home)
	}

	const apply = async () => {
		setIsLoading(true)
		const data = await applyDocuments(setIsLoading, applicationId.applicationId)

		if (data) {
			dispatch(mainNextStep())
		}
	}

	if (
		mainState < additionalStateId ||
		+applicationId.applicationId !== localId
	) {
		return <NotFound />
	}

	if (mainState > additionalStateId) {
		return (
			<StepComplete
				title="Documents are formed"
				subtitle="Documents for signing will be sent to your email"
			/>
		)
	}

	return (
		<>
			{isDeny ? (
				<Modal
					title={'Deny application'}
					text={'You exactly sure, you want to cancel this application?'}
					firstButton={'Cancel'}
					secondButton={'Deny'}
					firstBtnHandler={cancelHandler}
					secondBtnHandler={sureDenyHandler}
					closeHandler={cancelHandler}
				/>
			) : (
				<></>
			)}
			{isDenied ? (
				<Modal
					title={'Deny application'}
					text={'Your application has been deny!'}
					firstButton={'Go home'}
					firstBtnHandler={deniedConfirm}
					closeHandler={deniedConfirm}
				/>
			) : (
				<></>
			)}
			<div className={styles.table}>
				<Container>
					<div className={styles.table__wrapper}>
						<h2 className={styles.table__title}>
							Continuation of the application
						</h2>
						<span className={styles.table__step}>Step 3 of 5</span>
						<TableDocument />
						<div className={styles.table__bar}>
							<Button
								label="Deny"
								customStyle={styles.table__deny}
								onClick={denyHandler}
							/>
							<Checkbox
								checked={schedule}
								value={'schedule'}
								onChange={scheduleHandler}
								name={'schedule'}
								label={'I agree with the payment schedule'}
								customStyle={styles.table__checkbox}
							/>
							<Button
								label="Send"
								customStyle={styles.table__submit}
								onClick={apply}
								disabled={!schedule}
							/>
						</div>
					</div>
					{isLoading ? <Loader fullsize={true} /> : <></>}
				</Container>
			</div>
		</>
	)
}

export default TablePage
