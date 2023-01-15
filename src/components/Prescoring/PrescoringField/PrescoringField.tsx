import { Field } from 'formik'
import FormError from 'img/tsIcons/FormError'
import FormSuccess from 'img/tsIcons/FormSuccess'
import clsx from 'clsx'
import IPrescoringField from './types'

const PrescoringField: React.FC<IPrescoringField> = ({
	styles,
	handleChange,
	handleBlur,
	errors,
	touched,
	values,
	name,
	type,
	placeHolder,
	label,
	options,
	reqired,
}) => {
	if (type === 'text' || type === 'email')
		return (
			<div className={styles.form__wrapper}>
				<label htmlFor={name} className={styles.form__label}>
					{label}
					{reqired ? <span className={styles.form__label_required}></span> : ''}
				</label>
				<div className={styles.form__field}>
					<Field
						name={name}
						id={name}
						placeholder={placeHolder}
						type={type}
						value={values[name]}
						onChange={handleChange}
						onBlur={handleBlur}
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

	if (type === 'select')
		return (
			<div className={styles.form__wrapper}>
				<label htmlFor={name} className={styles.form__label}>
					{label}
					{reqired ? <span className={styles.form__label_required}></span> : ''}
				</label>
				<div className={styles.form__field}>
					<Field
						name={name}
						id={name}
						placeholder={placeHolder}
						as={type}
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

	if (type === 'date')
		return (
			<div className={styles.form__wrapper}>
				<label htmlFor={name} className={styles.form__label}>
					{label}
					{reqired ? <span className={styles.form__label_required}></span> : ''}
				</label>
				<div className={styles.form__field}>
					<Field
						name={name}
						id={name}
						placeholder={placeHolder}
						type={type}
						value={values[name]}
						onChange={handleChange}
						onBlur={handleBlur}
						max="2023-12-31"
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

export default PrescoringField
