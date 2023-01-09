import Container from '../Container/Container'
import styles from './Support.module.scss'
import planeImg from '../../img/icons/plane.png'
import emailImg from '../../img/icons/email.png'
import { useState, useEffect } from 'react'

const Support: React.FC = () => {
	const [value, setValue] = useState('')
	const [isSubscribed, setSubscribed] = useState(false)

	useEffect(() => {
		if (localStorage.getItem('isSubscribed')) {
			setSubscribed(true)
		}
	}, [])

	const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		await fetch('/email', {
			method: 'POST',
			body: JSON.stringify(value),
		})
			.then((response) => {
				if (!response.ok) {
					return Promise.reject('Failed to send request!')
				}
				response.json()
			})
			.then((data) => {
				window.localStorage.setItem('isSubscribed', 'true')
				setSubscribed(true)
				console.log('You are subscribed:', data)
			})
			.catch((error) => {
				setValue('')
				console.error('Error:', error)
				alert('Failed to send request!')
			})
	}

	const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	return (
		<section className={styles.support}>
			<Container>
				<div className={styles.support__wrapper}>
					<h2 className={styles.support__title}>Support</h2>
					<h3 className={styles.support__subtitle}>
						Subscribe Newsletter &amp;&nbsp;get
					</h3>
					<h4 className={styles.support__info}>Bank News</h4>
					<form className={styles.support__input} onSubmit={sendEmail}>
						<img src={emailImg} alt="email" />
						{!isSubscribed ? (
							<>
								<input
									type="email"
									className={styles.support__input_input}
									placeholder="Your email"
									onInput={emailHandler}
									value={value}
								/>
								<button className={styles.support__button} type="submit">
									<img
										className={styles.support__button_img}
										src={planeImg}
										alt="plane"
									/>
									<span className={styles.support__button_text}>Subscribe</span>
								</button>
							</>
						) : (
							<span className={styles.support__subscribed}>
								You are already subscribed to the banks newsletter
							</span>
						)}
					</form>
				</div>
			</Container>
		</section>
	)
}

export default Support
