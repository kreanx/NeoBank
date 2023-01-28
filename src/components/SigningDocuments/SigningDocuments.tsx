import styles from './SigningDocuments.module.scss'
import Container from 'ui-kit/Container/Container'
import FileImg from 'img/tsIcons/FileImg'
import { Checkbox } from 'ui-kit/Checkbox/Checkbox'
import { Button } from 'ui-kit/Button/Button'
import { useState } from 'react'
import { additionalNextStep } from 'store/slices/additionalStepSlice'
import { useAppDispatch, useAppSelector } from 'hook'
import NotFound from 'components/NotFound/NotFound'
import StepComplete from 'components/StepComplete/StepComplete'
import Loader from 'ui-kit/Loader/Loader'
import applySign from 'services/api/applySign'
import { useParams } from 'react-router-dom'

const SigningDocuments: React.FC = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const applicationId = useParams()
	const [isAgree, setIsAgree] = useState<boolean>(false)
	const dispatch = useAppDispatch()
	const mainState = useAppSelector((state) => state.mainStepReducer.current)
	const additionalState = useAppSelector(
		(state) => state.additionalStepReducer.current
	)

	const agreeHandler = () => {
		setIsAgree((prev) => !prev)
	}

	const applyInformation = () => {
		setIsLoading(true)
		applySign(setIsLoading, applicationId.applicationId)
		dispatch(additionalNextStep())
	}

	if (mainState !== 2) {
		return <NotFound />
	}

	if (additionalState >= 3) {
		return (
			<StepComplete
				title="Documents have been successfully signed and sent for approval"
				subtitle="Within 10 minutes you will be sent a PIN code to your email for confirmation"
			/>
		)
	}

	if (additionalState < 2) {
		return <NotFound />
	}

	return (
		<div className={styles.signing}>
			<Container>
				<div className={styles.signing__wrapper}>
					<h2 className={styles.signing__title}>
						Continuation of the application
					</h2>
					<span className={styles.signing__step}>Step 4 of 5</span>
					<div className={styles.signing__text}>
						Information on interest rates under bank deposit agreements with
						individuals. Center for Corporate Information Disclosure.
						Information of a professional participant in the securities market.
						Information about persons under whose control or significant
						influence the Partner Banks are. By leaving an application, you
						agree to the processing of personal data, obtaining information,
						obtaining access to a credit history, using an analogue of a
						handwritten signature, an offer, a policy regarding the processing
						of personal data, a form of consent to the processing of personal
						data.
					</div>
					<div className={styles.signing__information}>
						<a
							className={styles.signing__information_pdf}
							href="http://kharchuk.ru/JavaScript.pdf"
						>
							<FileImg />
						</a>
						<div className={styles.signing__information_text}>
							Information on your card
						</div>
					</div>
					<div className={styles.signing__bar}>
						<Checkbox
							checked={isAgree}
							name={'agree'}
							label={'I agree'}
							value={'agree'}
							onChange={agreeHandler}
						/>
						<Button
							label="Send"
							customStyle={styles.signing__btn}
							disabled={!isAgree}
							onClick={applyInformation}
						/>
					</div>
				</div>
				{isLoading ? <Loader fullsize={true} /> : <></>}
			</Container>
		</div>
	)
}

export default SigningDocuments
