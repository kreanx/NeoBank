import styles from './ScoringForm.module.scss'
import Container from 'ui-kit/Container/Container'
import { Form, Formik } from 'formik'
import PrescoringField from 'ui-kit/PrescoringField/PrescoringField'
import {
	applicationIdBaseContent,
	applicationIdEmploymentContent,
} from './Content'
import { Button } from 'ui-kit/Button/Button'
import Loader from 'ui-kit/Loader/Loader'
import { useState } from 'react'
import { ApplicationSchema } from './Validation'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'hook'
import NotFound from 'pages/NotFound/NotFound'
import StepComplete from 'components/StepComplete/StepComplete'
import localStorageHandler from '../../services/localStorage/localStorageHandler'
import { applyApplication } from 'services/api/api'
import { mainNextStep } from 'store/slices/mainStepSlice'
import { regSlashForPassport } from 'services/regexp'

const ScoringForm: React.FC = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const applicationId = useParams()
	const mainState = useAppSelector((state) => state.mainStepReducer.current)
	const dispatch = useAppDispatch()
	const localId = JSON.parse(
		localStorageHandler('application', 'get')
	)?.applicationId

	const additionalStateId = 2
	const accountId = '11223344556677889900'

	if (
		mainState < additionalStateId ||
		+applicationId.applicationId !== localId
	) {
		return <NotFound />
	}

	if (mainState > additionalStateId) {
		return (
			<StepComplete
				title="Wait for a decision on the application"
				subtitle="The answer will come to your mail within 10 minutes"
				isCheck={true}
			/>
		)
	}

	const handleSubmit = async (values) => {
		const newData = {
			gender: values.gender,
			maritalStatus: values.maritalStatus,
			dependentAmount: +values.dependentAmount,
			passportIssueDate: values.passportIssueDate,
			passportIssueBranch: values.passportIssueBranch
				.toString()
				.replace(regSlashForPassport, '$1' + '-'),
			employment: {
				employmentStatus: values.employmentStatus,
				employerINN: values.employerINN.toString(),
				salary: values.salary,
				position: values.position,
				workExperienceTotal: values.workExperienceTotal,
				workExperienceCurrent: values.workExperienceCurrent,
			},
			account: accountId,
		}

		setIsLoading(true)
		const data = await applyApplication(
			setIsLoading,
			newData,
			applicationId.applicationId
		)

		if (data) {
			dispatch(mainNextStep())
		}
	}
	return (
		<div className={styles.applicationId}>
			<Container>
				<div className={styles.applicationId__wrapper}>
					<Formik
						initialValues={{
							gender: '',
							maritalStatus: '',
							dependentAmount: '',
							passportIssueDate: '',
							passportIssueBranch: '',
							employmentStatus: '',
							employerINN: '',
							salary: '',
							position: '',
							workExperienceTotal: '',
							workExperienceCurrent: '',
						}}
						onSubmit={handleSubmit}
						validationSchema={ApplicationSchema}
					>
						{(props) => {
							const {
								isSubmitting,
								handleChange,
								handleBlur,
								handleSubmit,
								setFieldValue,
							} = props
							return (
								<div id="scroll">
									<Container>
										<h2 className={styles.applicationId__title}>
											Continuation of the application
										</h2>
										<span className={styles.applicationId__step}>
											Step 2 of 5
										</span>
										<Form
											onSubmit={handleSubmit}
											className={styles.applicationId__form}
										>
											<div className={styles.applicationId__inputsTop}>
												{applicationIdBaseContent.map((item, i) => {
													return (
														<PrescoringField
															{...props}
															key={i}
															handleBlur={handleBlur}
															handleChange={handleChange}
															label={item.label}
															name={item.name}
															placeHolder={item.placeHolder}
															options={item.options}
															required={item.required}
															maxLength={item.maxLength}
															isDate={item.isDate}
															isOnlyDigits={item.isOnlyDigits}
															wrapperStyle={
																styles.applicationId__inputsTop_wrapperTop
															}
														/>
													)
												})}
											</div>
											<h3 className={styles.applicationId__subtitle}>
												Employment
											</h3>
											<div className={styles.applicationId__inputsBottom}>
												{applicationIdEmploymentContent.map((item, i) => {
													return (
														<PrescoringField
															{...props}
															key={i}
															handleBlur={handleBlur}
															handleChange={handleChange}
															label={item.label}
															name={item.name}
															placeHolder={item.placeHolder}
															options={item.options}
															required={item.required}
															maxLength={item.maxLength}
															isOnlyDigits={item.isOnlyDigits}
															wrapperStyle={
																styles.applicationId__inputsBottom_wrapperBottom
															}
															isCurrency={item.isCurrency}
															setFieldValue={setFieldValue}
														/>
													)
												})}
											</div>
											<div className={styles.applicationId__btn}>
												<Button
													label="Continue"
													disabled={isSubmitting}
													customStyle={styles.btn}
												/>
											</div>
											{isLoading ? <Loader fullsize={true} /> : ''}
										</Form>
									</Container>
								</div>
							)
						}}
					</Formik>
				</div>
			</Container>
		</div>
	)
}

export default ScoringForm
