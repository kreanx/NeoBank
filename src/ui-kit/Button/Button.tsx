import styles from './Button.module.scss'
import clsx from 'clsx'
import { IButton } from './types'

const Button: React.FC<IButton> = ({
	label,
	disabled,
	customStyle,
	children,
	type,
	onClick,
}) => {
	return (
		<button
			type={type}
			disabled={disabled}
			className={clsx(styles.button, customStyle)}
			onClick={onClick}
		>
			{children}
			<span className={styles.button__text}>{label}</span>
		</button>
	)
}

export { Button }
