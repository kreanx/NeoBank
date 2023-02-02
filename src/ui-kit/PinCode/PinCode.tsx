import styles from './PinCode.module.scss'
import { useState, useEffect } from 'react'
import { Dispatch, SetStateAction } from 'react'

interface IPinCode {
	amount: number
	validCode: string
	isValid?: boolean
	setIsValid?: Dispatch<SetStateAction<boolean>>
}

const PinCode: React.FC<IPinCode> = ({
	amount,
	validCode,
	isValid,
	setIsValid,
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
			if (pinCode.join('') === validCode) {
				setIsValid(true)
			} else setIsValid(false)
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
		<div className={styles.PinCode}>
			<div className={styles.PinCode__input}>
				{pinCode.map((data, i) => {
					return (
						<input
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
