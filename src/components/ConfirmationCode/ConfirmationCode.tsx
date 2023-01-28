import ConfirmationComplete from 'components/ConfirmationComplete/ConfirmationComplete'
import NotFound from 'components/NotFound/NotFound'
import { useAppDispatch, useAppSelector } from 'hook'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import applyCode from 'services/api/applyCode'
import { additionalNextStep } from 'store/slices/additionalStepSlice'
import Container from 'ui-kit/Container/Container'
import Loader from 'ui-kit/Loader/Loader'
import Otp from 'ui-kit/Otp/Otp'
import styles from './ConfirmationCode.module.scss'

const ConfirmationCode: React.FC = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const applicationId = useParams()
	const dispatch = useAppDispatch()
	const mainState = useAppSelector((state) => state.mainStepReducer.current)
	const additionalState = useAppSelector(
		(state) => state.additionalStepReducer.current
	)
	const [isValid, setIsValid] = useState<boolean | null>(null)

	useEffect(() => {
		if (isValid) {
			setIsLoading(true)
			applyCode(setIsLoading, applicationId.applicationId)
			dispatch(additionalNextStep())
		}
	}, [isValid])

	if (mainState !== 2) {
		return <NotFound />
	}

	if (additionalState >= 4) {
		return <ConfirmationComplete />
	}

	if (additionalState < 3) {
		return <NotFound />
	}

	return (
		<div className={styles.confirmation}>
			<Container>
				<div className={styles.confirmation__wrapper}>
					<div className={styles.confirmation__title}>
						Please enter confirmation code
					</div>
					<div className={styles.confirmation__otp}>
						<Otp
							amount={4}
							validCode={'1111'}
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
