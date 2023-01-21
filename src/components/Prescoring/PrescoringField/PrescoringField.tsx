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
	placeHolder,
	label,
	options,
	required,
	maxLength,
}) => {
	if (!options)
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
						type="text"
						value={values[name]}
						onChange={handleChange}
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

	return (
		<div className={styles.form__wrapper}>
			<label htmlFor={name} className={styles.form__label}>
				{label}
				{required ? <span className={styles.form__label_required}></span> : ''}
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

export default PrescoringField
