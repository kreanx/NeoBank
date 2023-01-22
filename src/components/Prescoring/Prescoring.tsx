import Container from 'ui-kit/Container/Container'
import { Formik, Form, Field } from 'formik'
import styles from './Prescoring.module.scss'
import clsx from 'clsx'
import FormError from 'img/tsIcons/FormError'
import { Button } from 'ui-kit/Button/Button'
import FormSuccess from 'img/tsIcons/FormSuccess'
import { useState } from 'react'
import Loader from '../../ui-kit/Loader/Loader'
import PrescoringField from './PrescoringField/PrescoringField'
import Content from './Content'
import { PrescoringSchema, maxLengthHandler } from './Validation'

const Prescoring: React.FC = () => {
	const [loading, isLoading] = useState<boolean>(false)
	const [amount, setAmount] = useState<string>('15000')

	const amountHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setAmount(
			e.currentTarget.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
		)
	}

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
				validationSchema={PrescoringSchema}
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
														type="number"
														value={values.amount}
														onChange={(
															e: React.ChangeEvent<HTMLInputElement>
														) => {
															maxLengthHandler(e, e.target.maxLength)
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
