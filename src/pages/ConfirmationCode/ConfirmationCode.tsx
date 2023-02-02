import ConfirmationComplete from 'pages/ConfirmationCode/ConfirmationComplete/ConfirmationComplete'
import NotFound from 'pages/NotFound/NotFound'
import { useAppDispatch, useAppSelector } from 'hook'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { applyCode } from 'services/api/api'
import { getApplicationStatus } from 'services/api/api'
import localStorageHandler from 'services/localStorage/localStorageHandler'
import { mainDefaultStep, mainNextStep } from 'store/slices/mainStepSlice'
import Container from 'ui-kit/Container/Container'
import Loader from 'ui-kit/Loader/Loader'
import PinCode from 'ui-kit/PinCode/PinCode'
import styles from './ConfirmationCode.module.scss'

const ConfirmationCode: React.FC = () => {
	const [code, setCode] = useState<string>('0')
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const applicationId = useParams()
	const dispatch = useAppDispatch()
	const codeLength = 4
	const mainState = useAppSelector((state) => state.mainStepReducer.current)

	const [isValid, setIsValid] = useState<boolean | null>(null)
	const localId = JSON.parse(
		localStorageHandler('application', 'get')
	)?.applicationId

	const additionalStateId = 5

	useEffect(() => {
		async function getStatus() {
			const status = await getApplicationStatus(applicationId.applicationId)

			if (status.status === 'CC_DENIED' || status.status === 'CLIENT_DENIED') {
				dispatch(mainDefaultStep())
				localStorageHandler('application', 'remove')
				return
			}

			setCode(status.sesCode)
		}
		getStatus()
	}, [])

	useEffect(() => {
		async function codeCheck() {
			if (isValid) {
				setIsLoading(true)

				const data = await applyCode(
					setIsLoading,
					applicationId.applicationId,
					code
				)

				if (data) {
					dispatch(mainNextStep())
				}
			}
		}
		codeCheck()
	}, [isValid])

	if (
		mainState < additionalStateId ||
		+applicationId.applicationId !== localId
	) {
		return <NotFound />
	}

	if (mainState > additionalStateId) {
		return <ConfirmationComplete />
	}

	return (
		<div className={styles.confirmation}>
			<Container>
				<div className={styles.confirmation__wrapper}>
					<div className={styles.confirmation__title}>
						Please enter confirmation code
					</div>
					<div className={styles.confirmation__otp}>
						<PinCode
							amount={codeLength}
							validCode={code}
							setIsValid={setIsValid}
							isValid={isValid}
						/>
					</div>
				</div>
				{isLoading ? <Loader fullsize={true} /> : <></>}
			</Container>
		</div>
	)
}

export default ConfirmationCode
