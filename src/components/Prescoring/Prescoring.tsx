import Container from 'ui-kit/Container/Container'
import { Formik, Form } from 'formik'
import styles from './Prescoring.module.scss'
import { Button } from 'ui-kit/Button/Button'
import { useState } from 'react'
import Loader from '../../ui-kit/Loader/Loader'
import PrescoringField from '../../ui-kit/PrescoringField/PrescoringField'
import prescoringContent from './Content'
import { PrescoringSchema } from './Validation'
import { applyPrescoringForm } from 'services/api/api'
import { useAppDispatch } from 'hook'
import { mainNextStep } from 'store/slices/mainStepSlice'
import localStorageHandler from 'services/localStorage/localStorageHandler'
import { SetStateAction } from 'react'
import { Dispatch } from 'react'

export interface IPrescoring {
	setStep: Dispatch<SetStateAction<number>>
	setIsSended: Dispatch<SetStateAction<string>>
}

const Prescoring: React.FC = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [amount, setAmount] = useState<string>('15000')
	const dispatch = useAppDispatch()

	const amountHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setAmount(
			e.currentTarget.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
		)
	}

	return (
		<>
			<Formik
				initialValues={{
					amount: '150000',
					lastName: '',
					firstName: '',
					middleName: '',
					term: '6 months',
					email: '',
					birthdate: '',
					passportSeries: '',
					passportNumber: '',
				}}
				onSubmit={async (values) => {
					const newValues = { ...values, term: values.term.replace(/\D/g, '') }
					setIsLoading(true)

					const data = await applyPrescoringForm(setIsLoading, newValues)

					if (data) {
						localStorageHandler('offers', 'set', JSON.stringify(data))
						dispatch(mainNextStep())
					}
				}}
				validationSchema={PrescoringSchema}
			>
				{(props) => {
					const { isSubmitting, handleChange, handleBlur, handleSubmit } = props
					return (
						<div id="scroll">
							<Container>
								<Form onSubmit={handleSubmit} className={styles.form}>
									<div className={styles.form__top}>
										<div className={styles.form__block}>
											<div className={styles.form__block_text}>
												<h2 className={styles.form__title}>
													Customize your card
												</h2>
												<div className={styles.form__step}>Step 1 of 5</div>
											</div>
											<PrescoringField
												{...props}
												handleBlur={handleBlur}
												handleChange={handleChange}
												label={'Select amount'}
												name={'amount'}
												placeHolder={'5000 - 600000'}
												required={false}
												isOnlyDigits={true}
												maxLength={6}
												customHandler={amountHandler}
											/>
										</div>
										<div className={styles.form__divider}></div>
										<div className={styles.form__block}>
											<h4 className={styles.form__subtitle}>
												You have chosen the amount
											</h4>
											<span className={styles.form__amount}>{amount} ₽</span>
										</div>
									</div>
									<h3 className={styles.form__inputs_title}>
										Contact Information
									</h3>
									<div className={styles.form__inputs}>
										{prescoringContent.map((item, i) => {
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
												/>
											)
										})}
									</div>
									<div className={styles.btn}>
										<Button
											label="Continue"
											type="submit"
											disabled={isSubmitting}
											customStyle={styles.form__btn}
										/>
									</div>
									{isLoading ? <Loader fullsize={true} /> : ''}
								</Form>
							</Container>
						</div>
					)
				}}
			</Formik>
		</>
	)
}

export default Prescoring
