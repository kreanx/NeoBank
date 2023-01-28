import styles from './Otp.module.scss'
import { ChangeEvent, useState, useEffect } from 'react'
import { IOtp } from './types'

const Otp: React.FC<IOtp> = ({ amount, validCode, isValid, setIsValid }) => {
	const [otp, setOtp] = useState<string[]>(new Array(amount).fill(''))

	useEffect(() => {
		const checkOtp = []

		otp.forEach((item) => {
			if (item === '') {
				return
			} else {
				checkOtp.push(item)
			}
		})

		if (checkOtp.length === amount) {
			if (otp.join('') === validCode) {
				setIsValid(true)
			} else setIsValid(false)
		}
	}, [otp])

	const handleInput = (e: ChangeEvent<HTMLInputElement>, index: number) => {
		const element = e.target.value

		if (isNaN(+element)) return false

		setOtp([...otp.map((item, i) => (i === index ? element : item))])

		if (e.target.nextSibling) {
			const nextItem = e.target.nextSibling as HTMLElement
			nextItem.focus()
		}

		console.log(otp.join(''), validCode)
	}

	return (
		<div className={styles.otp}>
			<div className={styles.otp__input}>
				{otp.map((data, i) => {
					return (
						<input
							key={i}
							className={styles.otp__input_item}
							name="otp"
							value={data}
							maxLength={1}
							type="text"
							onChange={(e) => handleInput(e, i)}
							onFocus={(e) => e.target.select()}
							placeholder={'.'}
						/>
					)
				})}
			</div>
			{isValid === false ? (
				<div className={styles.otp__error}>Invalid confirmation code</div>
			) : (
				<></>
			)}
		</div>
	)
}

export default Otp
