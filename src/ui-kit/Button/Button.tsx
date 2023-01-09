import styles from './Button.module.scss'
import clsx from 'clsx'
import { TButton } from './types'

const Button: React.FC<TButton> = ({
	label,
	disabled,
	customStyle,
	children,
	type,
}) => {
	return (
		<button
			type={type}
			disabled={disabled}
			className={clsx(styles.button, customStyle)}
		>
			{children}
			<span className={styles.button__text}>{label}</span>
		</button>
	)
}

export { Button }
