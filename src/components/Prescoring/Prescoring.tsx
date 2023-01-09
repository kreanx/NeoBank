import Container from 'components/Container/Container'
import { Formik, Form, Field } from 'formik'
import styles from './Prescoring.module.scss'
import clsx from 'clsx'
import FormError from 'img/tsIcons/FormError'
import { Button } from 'ui-kit/Button/Button'
import * as Yup from 'yup'
import FormSuccess from 'img/tsIcons/FormSuccess'
import { useState } from 'react'
import Loader from '../../ui-kit/Loader/Loader'

const Prescoring: React.FC = () => {
	const [loading, isLoading] = useState(false)

	const checkAge = () => {
		const now = new Date()
		return new Date(now.setFullYear(now.getFullYear() - 18))
	}

	const validTime = () => {
		const now = new Date()
		return new Date(now.setFullYear(now.getFullYear() - 100))
	}

	const SignupSchema = Yup.object().shape({
		firstName: Yup.string().required('Required'),
		lastName: Yup.string().required('Required'),
		middleName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
		term: Yup.string()
			.min(2, 'Too Short!')
			.max(50, 'Too Long!')
			.required('Required'),
		birthdate: Yup.date()
			.min(validTime(), 'Please enter a valid date')
			.max(checkAge(), 'You must be at least 18 years old!')
			.required('Required'),
		passportSeries: Yup.number()
			.min(1000, 'Too Short!')
			.max(9999, 'Too Long!')
			.required('Required'),
		passportNumber: Yup.number()
			.min(100000, 'Too Short!')
			.max(999999, 'Too Long!')
			.required('Required'),
		email: Yup.string().email('Invalid email').required('Required'),
		amount: Yup.number().min(15000, 'Too Short!').max(600000, 'Too Long!'),
	})
	return (
		<>
			<Formik
				initialValues={{
					amount: '15 000',
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
														placeholder="150 000"
														type="text"
														value={values.amount}
														onChange={handleChange}
														onBlur={handleBlur}
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
											<span className={styles.form__amount}>150 000 ₽</span>
										</div>
									</div>
									<h3 className={styles.form__inputs_title}>
										Contact Information
									</h3>
									<div className={styles.form__inputs}>
										<div className={styles.form__wrapper}>
											<label htmlFor="lastName" className={styles.form__label}>
												Your last name
												<span className={styles.form__label_required}></span>
											</label>
											<div className={styles.form__field}>
												<Field
													id="lastName"
													placeholder="For Example Doe"
													type="text"
													value={values.lastName}
													onChange={handleChange}
													onBlur={handleBlur}
													className={clsx(styles.form__input, {
														[styles.form__input_error]:
															errors.lastName && touched.lastName,
													})}
												/>
												<div className={styles.form__label_icon}>
													{errors.lastName && touched.lastName ? (
														<FormError />
													) : null}
													{!errors.lastName && touched.lastName ? (
														<FormSuccess />
													) : null}
												</div>
											</div>
											{errors.lastName && touched.lastName && (
												<div className={styles.form__input_errortext}>
													{errors.lastName}
												</div>
											)}
										</div>
										<div className={styles.form__wrapper}>
											<label htmlFor="firstName" className={styles.form__label}>
												Your first name
												<span className={styles.form__label_required}></span>
											</label>
											<div className={styles.form__field}>
												<Field
													id="firstName"
													placeholder="For Example John"
													type="text"
													value={values.firstName}
													onChange={handleChange}
													onBlur={handleBlur}
													className={clsx(styles.form__input, {
														[styles.form__input_error]:
															errors.firstName && touched.firstName,
													})}
												/>
												<div className={styles.form__label_icon}>
													{errors.firstName && touched.firstName ? (
														<FormError />
													) : null}
													{!errors.firstName && touched.firstName ? (
														<FormSuccess />
													) : null}
												</div>
											</div>
											{errors.firstName && touched.firstName && (
												<div className={styles.form__input_errortext}>
													{errors.firstName}
												</div>
											)}
										</div>
										<div className={styles.form__wrapper}>
											<label
												htmlFor="middleName"
												className={styles.form__label}
											>
												Your middleName
											</label>
											<div className={styles.form__field}>
												<Field
													id="middleName"
													placeholder="For Example Victorovich"
													type="text"
													value={values.middleName}
													onChange={handleChange}
													onBlur={handleBlur}
													className={clsx(styles.form__input, {
														[styles.form__input_error]:
															errors.middleName && touched.middleName,
													})}
												/>
												<div className={styles.form__label_icon}>
													{errors.middleName && touched.middleName ? (
														<FormError />
													) : null}
													{!errors.middleName && touched.middleName ? (
														<FormSuccess />
													) : null}
												</div>
											</div>
											{errors.middleName && touched.middleName && (
												<div className={styles.form__input_errortext}>
													{errors.middleName}
												</div>
											)}
										</div>
										<div className={styles.form__wrapper}>
											<label htmlFor="term" className={styles.form__label}>
												Select term
												<span className={styles.form__label_required}></span>
											</label>

											<div className={styles.form__field}>
												<Field
													id="term"
													placeholder="6 month"
													as="select"
													value={values.term}
													onChange={handleChange}
													onBlur={handleBlur}
													className={clsx(styles.form__input, {
														[styles.form__input_error]:
															errors.term && touched.term,
													})}
												>
													<option value="6 month">6 month</option>
													<option value="12 month">12 month</option>
													<option value="18 month">18 month</option>
													<option value="24 month">24 month</option>
												</Field>
											</div>

											{errors.term && touched.term && (
												<div className={styles.form__input_errortext}>
													{errors.term}
												</div>
											)}
										</div>
										<div className={styles.form__wrapper}>
											<label htmlFor="email" className={styles.form__label}>
												Your email
												<span className={styles.form__label_required}></span>
											</label>

											<div className={styles.form__field}>
												<Field
													id="email"
													placeholder="test@gmail.com"
													type="email"
													value={values.email}
													onChange={handleChange}
													onBlur={handleBlur}
													className={clsx(styles.form__input, {
														[styles.form__input_error]:
															errors.email && touched.email,
													})}
												/>
												<div className={styles.form__label_icon}>
													{errors.email && touched.email ? <FormError /> : null}
													{!errors.email && touched.email ? (
														<FormSuccess />
													) : null}
												</div>
											</div>
											{errors.email && touched.email && (
												<div className={styles.form__input_errortext}>
													{errors.email}
												</div>
											)}
										</div>
										<div className={styles.form__wrapper}>
											<label htmlFor="birthdate" className={styles.form__label}>
												Your date of birthdate
												<span className={styles.form__label_required}></span>
											</label>
											<div className={styles.form__field}>
												<Field
													id="birthdate"
													placeholder="Select Date and Time"
													type="date"
													value={values.birthdate}
													onChange={handleChange}
													onBlur={handleBlur}
													className={clsx(styles.form__input, {
														[styles.form__input_error]:
															errors.birthdate && touched.birthdate,
													})}
												/>
												<div className={styles.form__label_icon}>
													{errors.birthdate && touched.birthdate ? (
														<FormError />
													) : null}
													{!errors.birthdate && touched.birthdate ? (
														<FormSuccess />
													) : null}
												</div>
											</div>
											{errors.birthdate && touched.birthdate && (
												<div className={styles.form__input_errortext}>
													{errors.birthdate}
												</div>
											)}
										</div>
										<div className={styles.form__wrapper}>
											<label
												htmlFor="passportSeries"
												className={styles.form__label}
											>
												Your passport series
												<span className={styles.form__label_required}></span>
											</label>
											<div className={styles.form__field}>
												<Field
													id="passportSeries"
													placeholder="0000"
													type="number"
													value={values.passportSeries}
													onChange={handleChange}
													onBlur={handleBlur}
													className={clsx(styles.form__input, {
														[styles.form__input_error]:
															errors.passportSeries && touched.passportSeries,
													})}
												/>
												<div className={styles.form__label_icon}>
													{errors.passportSeries && touched.passportSeries ? (
														<FormError />
													) : null}
													{!errors.passportSeries && touched.passportSeries ? (
														<FormSuccess />
													) : null}
												</div>
											</div>
											{errors.passportSeries && touched.passportSeries && (
												<div className={styles.form__input_errortext}>
													{errors.passportSeries}
												</div>
											)}
										</div>
										<div className={styles.form__wrapper}>
											<label
												htmlFor="passportNumber"
												className={styles.form__label}
											>
												Your passport number
												<span className={styles.form__label_required}></span>
											</label>
											<div className={styles.form__field}>
												<Field
													id="passportNumber"
													placeholder="000000"
													type="number"
													value={values.passportNumber}
													onChange={handleChange}
													onBlur={handleBlur}
													className={clsx(styles.form__input, {
														[styles.form__input_error]:
															errors.passportNumber && touched.passportNumber,
													})}
												/>
												<div className={styles.form__label_icon}>
													{errors.passportNumber && touched.passportNumber ? (
														<FormError />
													) : null}
													{!errors.passportNumber && touched.passportNumber ? (
														<FormSuccess />
													) : null}
												</div>
											</div>
											{errors.passportNumber && touched.passportNumber && (
												<div className={styles.form__input_errortext}>
													{errors.passportNumber}
												</div>
											)}
										</div>
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
