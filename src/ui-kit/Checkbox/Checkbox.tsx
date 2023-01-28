import { ICheckbox } from './types'
import styles from './Checkbox.module.scss'
import clsx from 'clsx'

const Checkbox: React.FC<ICheckbox> = ({
	checked,
	onChange,
	label,
	name,
	value,
	customStyle,
}) => {
	return (
		<label className={clsx(styles.checkbox__label, customStyle)}>
			<input
				type="checkbox"
				name={name}
				checked={checked}
				onChange={onChange}
				value={value}
				className={styles.checkbox__input}
			/>
			<div
				className={clsx(styles.checkbox__checkmark, {
					[styles.checked]: checked,
				})}
			>
				<svg
					width="16"
					height="13"
					viewBox="0 0 16 13"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M1 4L6.5 10.5L14.5 1" stroke="#0D0C0C" strokeWidth="2" />
				</svg>
			</div>
			<span className={styles.checkbox__text}>{label}</span>
		</label>
	)
}

export { Checkbox }
