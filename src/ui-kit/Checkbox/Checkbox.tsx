import styles from './Checkbox.module.scss'
import clsx from 'clsx'
export interface ICheckbox {
	checked: boolean
	label?: string
	name: string
	value: string
	onChange: () => void
	customStyle?: string
}

const Checkbox: React.FC<ICheckbox> = ({
	checked,
	onChange,
	label,
	name,
	value,
	customStyle,
}) => {
	return (
		<label
			data-testid="custom-style"
			className={clsx(styles.checkbox__label, customStyle)}
		>
			<input
				type="checkbox"
				name={name}
				checked={checked}
				onChange={onChange}
				value={value}
				className={styles.checkbox__input}
			/>
			<div
				data-testid="checked"
				className={clsx(styles.checkbox__checkmark, {
					[styles.checked]: checked,
				})}
			>
				<svg
					width="10"
					height="9"
					viewBox="0 0 10 9"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M1 4L4 7L9 1" stroke="white" strokeWidth="2" />
				</svg>
			</div>
			<span className={styles.checkbox__text}>{label}</span>
		</label>
	)
}

export { Checkbox }
