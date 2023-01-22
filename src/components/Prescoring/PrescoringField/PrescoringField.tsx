import { Field } from 'formik'
import FormError from 'img/tsIcons/FormError'
import FormSuccess from 'img/tsIcons/FormSuccess'
import clsx from 'clsx'
import IPrescoringField from './types'
import { maxLengthHandler } from '../Validation'

const PrescoringField: React.FC<IPrescoringField> = ({
	styles,
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
}) => {
	if (!options && !isDate)
		return (
			<div className={styles.form__wrapper}>
				<label htmlFor={name} className={styles.form__label}>
					{label}
					{required ? (
						<span className={styles.form__label_required}></span>
					) : (
						''
					)}
				</label>
				<div className={styles.form__field}>
					<Field
						name={name}
						id={name}
						placeholder={placeHolder}
						type={isOnlyDigits ? 'number' : 'text'}
						value={values[name]}
						onChange={(e) => {
							maxLengthHandler(e, maxLength)
							handleChange(e)
						}}
						onBlur={handleBlur}
						maxLength={maxLength}
						className={clsx(styles.form__input, {
							[styles.form__input_error]: errors[name] && touched[name],
						})}
					/>
					<div className={styles.form__label_icon}>
						{errors[name] && touched[name] ? <FormError /> : null}
						{!errors[name] && touched[name] ? <FormSuccess /> : null}
					</div>
				</div>
				{errors[name] && touched[name] && (
					<div className={styles.form__input_errortext}>{errors[name]}</div>
				)}
			</div>
		)

	if (isDate) {
		let validDateLength = ''

		switch (maxLength) {
			case 4:
				validDateLength = '2100-12-31'
				break
			case 5:
				validDateLength = '21000-12-31'
				break
			case 6:
				validDateLength = '210000-12-31'
				break
		}

		return (
			<div className={styles.form__wrapper}>
				<label htmlFor={name} className={styles.form__label}>
					{label}
					{required ? (
						<span className={styles.form__label_required}></span>
					) : (
						''
					)}
				</label>
				<div className={styles.form__field}>
					<Field
						name={name}
						id={name}
						placeholder={placeHolder}
						type="date"
						value={values[name]}
						onChange={(e) => {
							handleChange(e)
						}}
						onBlur={handleBlur}
						max={validDateLength}
						className={clsx(styles.form__input, {
							[styles.form__input_error]: errors[name] && touched[name],
						})}
					/>
					<div className={styles.form__label_icon}>
						{errors[name] && touched[name] ? <FormError /> : null}
						{!errors[name] && touched[name] ? <FormSuccess /> : null}
					</div>
				</div>
				{errors[name] && touched[name] && (
					<div className={styles.form__input_errortext}>{errors[name]}</div>
				)}
			</div>
		)
	}

	if (options) {
		return (
			<div className={styles.form__wrapper}>
				<label htmlFor={name} className={styles.form__label}>
					{label}
					{required ? (
						<span className={styles.form__label_required}></span>
					) : (
						''
					)}
				</label>
				<div className={styles.form__field}>
					<Field
						name={name}
						id={name}
						placeholder={placeHolder}
						as="select"
						value={values[name]}
						onChange={handleChange}
						onBlur={handleBlur}
						className={clsx(styles.form__input, {
							[styles.form__input_error]: errors[name] && touched[name],
						})}
					>
						{options.map((option, i) => {
							return (
								<option key={i} value={option}>
									{option}
								</option>
							)
						})}
					</Field>
					<div className={styles.form__label_icon}>
						{errors[name] && touched[name] ? <FormError /> : null}
						{!errors[name] && touched[name] ? <FormSuccess /> : null}
					</div>
				</div>
				{errors[name] && touched[name] && (
					<div className={styles.form__input_errortext}>{errors[name]}</div>
				)}
			</div>
		)
	}
}

export default PrescoringField
