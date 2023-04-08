import { Button } from 'ui-kit/Button/Button'
import styles from './Modal.module.scss'
export interface IModal {
	title: string
	text: string
	firstButton?: string
	secondButton?: string
	firstBtnHandler?: () => void
	secondBtnHandler?: () => void
	closeHandler?: () => void
}

const Modal: React.FC<IModal> = ({
	text,
	title,
	firstButton,
	secondButton,
	firstBtnHandler,
	secondBtnHandler,
	closeHandler,
}) => {
	return (
		<div className={styles.modal}>
			<div className={styles.modal__window}>
				<div className={styles.modal__top}>
					<h3 className={styles.modal__title}>{title}</h3>
					<svg
						data-testid="close-icon"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className={styles.modal__close}
						onClick={closeHandler}
					>
						<path
							d="M18 6L6 18"
							stroke="#33363F"
							strokeWidth="2"
							strokeLinecap="square"
							strokeLinejoin="round"
						/>
						<path
							d="M6 6L18 18"
							stroke="#33363F"
							strokeWidth="2"
							strokeLinecap="square"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
				<div className={styles.modal__text}>{text}</div>
				<div className={styles.modal__btns}>
					{secondButton ? (
						<Button
							label={secondButton}
							customStyle={styles.modal__secondbtn}
							onClick={secondBtnHandler}
						/>
					) : (
						<></>
					)}
					{firstButton ? (
						<Button
							label={firstButton}
							customStyle={styles.modal__firstbtn}
							onClick={firstBtnHandler}
						/>
					) : (
						<></>
					)}
				</div>
			</div>
		</div>
	)
}

export default Modal
