import Container from 'ui-kit/Container/Container'
import { Formik, Form, Field } from 'formik'
import styles from './Prescoring.module.scss'
import clsx from 'clsx'
import FormError from 'img/tsIcons/FormError'
import { Button } from 'ui-kit/Button/Button'
import * as Yup from 'yup'
import FormSuccess from 'img/tsIcons/FormSuccess'
import { useState } from 'react'
import Loader from '../../ui-kit/Loader/Loader'
import PrescoringField from './PrescoringField/PrescoringField'
import Content from './Content'

const Prescoring: React.FC = () => {
	const [loading, isLoading] = useState<boolean>(false)
	const [amount, setAmount] = useState<string>('0')

	const age = 18
	const year = 100

	const amountHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setAmount(
			e.currentTarget.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
		)
	}

	const checkAge = () => {
		const now = new Date()
		return new Date(now.setFullYear(now.getFullYear() - age))
	}

	const validTime = () => {
		const now = new Date()
		return new Date(now.setFullYear(now.getFullYear() - year))
	}

	const SignupSchema = Yup.object().shape({
		firstName: Yup.string().required('Required'),
		lastName: Yup.string().required('Required'),
		middleName: Yup.string().min(2, 'Too Short!').max(20, 'Too Long!'),
		term: Yup.string().required('Required'),
		birthdate: Yup.date()
			.min(validTime(), 'Please enter a valid date')
			.max(checkAge(), 'You must be at least 18 years old!')
			.required('Required')
			.typeError('Please enter a valid date'),
		passportSeries: Yup.number()
			.required('Required')
			.min(1000, 'Passport series must be 4 digits minimum!')
			.typeError('Passport series must be only in digits!'),
		passportNumber: Yup.number()
			.required('Required')
			.min(100000, 'Passport number must be 6 digits minimum!')
			.typeError('Passport number must be only in digits!'),
		email: Yup.string().email('Invalid email').required('Required'),
		amount: Yup.number()
			.min(15000, 'Minimum amount - 15 000!')
			.max(600000, 'Maximum amount - 600 000!')
			.typeError('Amount must be only in digits!'),
	})
	return (
		<>
			<Formik
				initialValues={{
					amount: '15000',
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
					isLoading(true)
					await fetch('/application ', {
						method: 'POST',
						body: JSON.stringify(values),
					})
						.then((response) => {
							isLoading(true)
							if (!response.ok) {
								return Promise.reject('Failed to send request!')
							}
							response.json()
						})
						.then((data) => {
							isLoading(false)
							console.log('You are sent request:', data)
						})
						.catch((error) => {
							isLoading(false)
							console.error('Error:', error)
							alert('Failed to send request!')
						})
				}}
				validationSchema={SignupSchema}
			>
				{(props) => {
					const {
						values,
						touched,
						errors,
						isSubmitting,
						handleChange,
						handleBlur,
						handleSubmit,
					} = props
					return (
						<div id="form">
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
											<div className={styles.form__block_input}>
												<label htmlFor="amount" className={styles.form__label}>
													Select amount
													<span className={styles.form__label_required}></span>
												</label>
												<div className={styles.form__field}>
													<Field
														id="amount"
														placeholder="15000 - 600000"
														type="text"
														value={values.amount}
														onChange={(e) => {
															amountHandler(e)
															handleChange(e)
														}}
														onBlur={handleBlur}
														maxLength={6}
														className={clsx(styles.form__input, {
															[styles.form__input_error]:
																errors.amount && touched.amount,
														})}
													/>
													<div className={styles.form__label_icon}>
														{errors.amount && touched.amount ? (
															<FormError />
														) : null}
														{!errors.amount && touched.amount ? (
															<FormSuccess />
														) : null}
													</div>
												</div>
												{errors.amount && touched.amount && (
													<div className={styles.form__input_errortext}>
														{errors.amount}
													</div>
												)}
											</div>
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
										{Content.map((item, i) => {
											return (
												<PrescoringField
													{...props}
													key={i}
													handleBlur={handleBlur}
													handleChange={handleChange}
													label={item.label}
													name={item.name}
													placeHolder={item.placeHolder}
													styles={styles}
													options={item.options}
													required={item.required}
													maxLength={item.maxLength}
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
									{loading ? <Loader fullsize={true} /> : ''}
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
