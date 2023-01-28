import { Checkbox } from 'ui-kit/Checkbox/Checkbox'
import Container from 'ui-kit/Container/Container'
import styles from './TableDocument.module.scss'
import { useState } from 'react'
import { tableDocumentContent, tableDocumentHeaders } from './Content'
import Table from 'ui-kit/Table/Table'
import { Button } from 'ui-kit/Button/Button'
import Modal from 'components/Modal/Modal'
import { useNavigate, useParams } from 'react-router-dom'
import { routes } from 'services/routes'
import { useAppDispatch, useAppSelector } from 'hook'
import { mainDefaultStep } from 'store/slices/mainStepSlice'
import {
	additionalDefaultStep,
	additionalNextStep,
} from 'store/slices/additionalStepSlice'
import NotFound from 'components/NotFound/NotFound'
import StepComplete from 'components/StepComplete/StepComplete'
import Loader from 'ui-kit/Loader/Loader'
import applyDocuments from 'services/api/applyDocuments'

const TableDocument: React.FC = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [schedule, setSchedule] = useState<boolean>(false)
	const [content, setContent] = useState(tableDocumentContent)
	const [order, setOrder] = useState<'ASC' | 'DESC'>('ASC')
	const [isDeny, setIsDeny] = useState<boolean>(false)
	const [isDenied, setIsDenied] = useState<boolean>(false)
	const applicationId = useParams()
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const mainState = useAppSelector((state) => state.mainStepReducer.current)
	const additionalState = useAppSelector(
		(state) => state.additionalStepReducer.current
	)

	const sortingHandler = (col: string) => {
		if (order === 'ASC') {
			const sorted = [...content].sort((a, b) =>
				+a[col].toLowerCase() > +b[col].toLowerCase() ? 1 : -1
			)
			setContent(sorted)
			setOrder('DESC')
		}
		if (order === 'DESC') {
			const sorted = [...content].sort((a, b) =>
				+a[col].toLowerCase() < +b[col].toLowerCase() ? 1 : -1
			)
			setContent(sorted)
			setOrder('ASC')
		}
	}

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
		dispatch(mainDefaultStep())
		dispatch(additionalDefaultStep())
		navigate(routes.home)
	}

	const apply = () => {
		setIsLoading(true)
		applyDocuments(setIsLoading, applicationId.applicationId)
		dispatch(additionalNextStep())
	}

	if (mainState !== 2) {
		return <NotFound />
	}

	if (additionalState >= 2) {
		return (
			<StepComplete
				title="Documents are formed"
				subtitle="Documents for signing will be sent to your email"
			/>
		)
	}
	if (additionalState < 1) {
		return <NotFound />
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
						<Table
							content={content}
							headers={tableDocumentHeaders}
							sortingHandler={sortingHandler}
						/>
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

export default TableDocument
