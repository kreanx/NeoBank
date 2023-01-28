import styles from './ApplicationId.module.scss'
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
import applyApplication from 'services/api/applyApplication'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'hook'
import NotFound from 'components/NotFound/NotFound'
import { additionalNextStep } from 'store/slices/additionalStepSlice'
import StepComplete from 'components/StepComplete/StepComplete'

const ApplicationId: React.FC = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const applicationId = useParams()
	const mainState = useAppSelector((state) => state.mainStepReducer.current)
	const additionalState = useAppSelector(
		(state) => state.additionalStepReducer.current
	)
	const dispatch = useAppDispatch()

	if (mainState !== 2) {
		return <NotFound />
	}

	if (additionalState >= 1) {
		return (
			<StepComplete
				title="Wait for a decision on the application"
				subtitle="The answer will come to your mail within 10 minutes"
			/>
		)
	}
	return (
		<div className={styles.applicationId}>
			<Container>
				<div className={styles.applicationId__wrapper}>
					<Formik
						initialValues={{
							gender: 'male',
							maritalStatus: 'married',
							dependentAmount: '1',
							passportIssueDate: '',
							passportIssueBranch: '',
							employmentStatus: 'unemployed',
							employerINN: '',
							salary: '',
							position: 'worker',
							workExperienceTotal: '',
							workExperienceCurrent: '',
						}}
						onSubmit={async (values) => {
							setIsLoading(true)
							applyApplication(
								values,
								setIsLoading,
								applicationId.applicationId
							)
							dispatch(additionalNextStep())
						}}
						validationSchema={ApplicationSchema}
					>
						{(props) => {
							const { isSubmitting, handleChange, handleBlur, handleSubmit } =
								props
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
											<div className={styles.applicationId__inputs}>
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
																styles.applicationId__inputs_wrapper
															}
														/>
													)
												})}
											</div>
											<h3 className={styles.applicationId__subtitle}>
												Employment
											</h3>
											<div className={styles.applicationId__inputs}>
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
																styles.applicationId__inputs_wrapper
															}
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

export default ApplicationId
