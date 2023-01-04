import Container from '../Container/Container'
import styles from './Support.module.scss'
import planeImg from '../../img/icons/plane.png'
import emailImg from '../../img/icons/email.png'

const Support: React.FC = () => {
	return (
		<section className={styles.support}>
			<Container>
				<div className={styles.support__wrapper}>
					<h2 className={styles.support__title}>Support</h2>
					<h3 className={styles.support__subtitle}>
						Subscribe Newsletter &amp;&nbsp;get
					</h3>
					<h4 className={styles.support__info}>Bank News</h4>
					<form className={styles.support__input}>
						<img src={emailImg} alt="email" />
						<span className={styles.support__subscribed}>
							You are already subscribed!
						</span>
						<input
							type="email"
							className={styles.support__input_input}
							placeholder="Your email"
						/>
						<button className={styles.support__button} type="submit">
							<img
								className={styles.support__button_img}
								src={planeImg}
								alt="plane"
							/>

							<span className={styles.support__button_text}>Subscribe</span>
						</button>
					</form>
				</div>
			</Container>
		</section>
	)
}

export default Support
