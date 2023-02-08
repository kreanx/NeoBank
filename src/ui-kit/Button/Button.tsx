import styles from './Button.module.scss'
import clsx from 'clsx'
export interface IButton {
	label: string
	onClick?: () => void
	disabled?: boolean
	customStyle?: string
	children?: React.ReactNode
	type?: 'button' | 'submit' | 'reset'
}

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
			data-testid="button"
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
