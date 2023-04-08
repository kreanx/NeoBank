import { Field } from 'formik'
import FormError from 'img/tsIcons/FormError'
import FormSuccess from 'img/tsIcons/FormSuccess'
import clsx from 'clsx'
import { maxLengthHandler } from './Validation'
import styles from './PrescoringField.module.scss'
import { IPrescoringField } from './types'

const PrescoringField: React.FC<IPrescoringField> = ({
	handleChange,
	handleBlur,
	errors,
	touched,
	values,
	name,
	placeHolder,
	label,
	options,
	required,
	maxLength,
	isOnlyDigits,
	isDate,
	customHandler,
	wrapperStyle,
	setFieldValue,
	isCurrency,
}) => {
	let ScoringField
	let ErrorsField

	function formatCurrency(value: number) {
		return new Intl.NumberFormat('ru-RU').format(value).toString()
	}

	if (!options && !isDate) {
		ScoringField = (
			<Field
				name={name}
				id={name}
				placeholder={placeHolder}
				type={isCurrency ? 'text' : isOnlyDigits ? 'number' : 'text'}
				value={isCurrency ? formatCurrency(values[name]) : values[name]}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					const value = e.target.value.replace(/[^\d]/g, '')
					maxLengthHandler(e, maxLength)
					if (isCurrency) {
						setFieldValue(name, value)
					} else {
						handleChange(e)
					}
					if (customHandler) {
						customHandler(value)
					}
				}}
				onBlur={handleBlur}
				maxLength={maxLength ? maxLength + 1 : 10}
				className={clsx(styles.form__input, {
					[styles.form__input_error]: errors[name] && touched[name],
				})}
			/>
		)

		ErrorsField = (
			<div className={styles.form__label_icon}>
				{errors[name] && touched[name] ? <FormError /> : null}
				{!errors[name] && touched[name] ? <FormSuccess /> : null}
			</div>
		)
	}

	if (isDate) {
		const zeroAmount = [...new Array(maxLength - 2).fill('0')].join('')
		const validDateLength = `21${zeroAmount}-12-31`

		ScoringField = (
			<Field
				name={name}
				id={name}
				placeholder={placeHolder}
				type="date"
				value={values[name]}
				onChange={handleChange}
				onBlur={handleBlur}
				max={validDateLength}
				className={clsx(styles.form__input, {
					[styles.form__input_error]: errors[name] && touched[name],
				})}
			/>
		)

		ErrorsField = (
			<div className={styles.form__label_icon}>
				{errors[name] && touched[name] ? <FormError /> : null}
				{!errors[name] && touched[name] ? <FormSuccess /> : null}
			</div>
		)
	}

	if (options) {
		ScoringField = (
			<Field
				name={name}
				id={name}
				as="select"
				onChange={handleChange}
				onBlur={handleBlur}
				className={clsx(styles.form__input, {
					[styles.form__input_error]: errors[name] && touched[name],
				})}
			>
				{[''].concat(options).map((option, i) => {
					return (
						<option key={i} value={option}>
							{option}
						</option>
					)
				})}
			</Field>
		)

		ErrorsField = <></>
	}

	return (
		<div className={clsx(styles.form__wrapper, wrapperStyle)}>
			<label htmlFor={name} className={styles.form__label}>
				{label}
				{required ? <span className={styles.form__label_required}></span> : ''}
			</label>
			<div className={styles.form__field}>
				{ScoringField}
				{ErrorsField}
			</div>
			{errors[name] && touched[name] && (
				<div className={styles.form__input_errortext}>{errors[name]}</div>
			)}
		</div>
	)
}

export default PrescoringField
