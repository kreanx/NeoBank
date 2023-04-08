import Container from '../../ui-kit/Container/Container'
import styles from './SubscribeNews.module.scss'
import planeImg from '../../img/icons/plane.png'
import emailImg from '../../img/icons/email.png'
import { useState, useEffect } from 'react'
import localStorageHandler from 'services/localStorage/localStorageHandler'
import subscribeNews from 'services/api/subscribeNews'

const SubscribeNews: React.FC = () => {
	const [value, setValue] = useState<string>('')
	const [isSubscribed, setSubscribed] = useState<boolean>(false)

	useEffect(() => {
		if (localStorageHandler('isSubscribed', 'get')) {
			setSubscribed(true)
		}
	}, [])

	const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		subscribeNews(setSubscribed, value, setValue)
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

export default SubscribeNews
