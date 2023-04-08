import styles from './PinCode.module.scss'
import { useState, useEffect, Dispatch, SetStateAction } from 'react'

interface IPinCode {
	amount: number
	isValid?: boolean
	setIsValid?: Dispatch<SetStateAction<boolean>>
	setCode?: Dispatch<SetStateAction<number>>
}

const PinCode: React.FC<IPinCode> = ({
	amount,
	isValid,
	setIsValid,
	setCode,
}) => {
	const [pinCode, setPinCode] = useState<string[]>(new Array(amount).fill(''))

	useEffect(() => {
		const checkPinCode = []

		pinCode.forEach((item) => {
			if (item === '') {
				return
			} else {
				checkPinCode.push(item)
			}
		})

		if (checkPinCode.length === amount) {
			setCode(+checkPinCode.join(''))
			setIsValid(true)
		}
	}, [pinCode])

	const handleInput = (e: React.FormEvent<HTMLInputElement>, index: number) => {
		const element = e.currentTarget.value
		if (!element) {
			return
		}
		if (isNaN(+element)) return false

		setPinCode([...pinCode.map((item, i) => (i === index ? element : item))])

		if (e.currentTarget.nextSibling) {
			const nextItem = e.currentTarget.nextSibling as HTMLElement
			nextItem.focus()
		}
	}

	const handleDelete = (
		e: React.KeyboardEvent<HTMLInputElement>,
		index: number
	) => {
		const key = e.key

		if (key === 'Backspace' || key === 'Delete') {
			setPinCode([...pinCode.map((item, i) => (i === index ? '' : item))])

			if (e.currentTarget.previousSibling) {
				const prevItem = e.currentTarget.previousElementSibling as HTMLElement
				prevItem.focus()
			}
		}
	}

	return (
		<div data-testid="pin-code" className={styles.PinCode}>
			<div className={styles.PinCode__input}>
				{pinCode.map((data, i) => {
					return (
						<input
							data-testid="input-item"
							key={i}
							className={styles.PinCode__input_item}
							name="PinCode"
							value={data}
							maxLength={1}
							type="text"
							onKeyDown={(e) => handleDelete(e, i)}
							onInput={(e) => handleInput(e, i)}
							onFocus={(e) => e.target.select()}
							placeholder={' '}
						/>
					)
				})}
			</div>
			{isValid === false ? (
				<div className={styles.PinCode__error}>Invalid confirmation code</div>
			) : (
				<></>
			)}
		</div>
	)
}

export default PinCode
