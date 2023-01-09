import styles from './About.module.scss'
import MoneyImg from 'img/tsIcons/MoneyImg'
import CalendarImg from 'img/tsIcons/CalendarImg'
import clsx from 'clsx'
import ClockImg from 'img/tsIcons/ClockImg'
import ShoppingBagImg from 'img/tsIcons/ShoppingBagImg'
import CardImg from 'img/tsIcons/CardImg'

const About: React.FC = () => {
	return (
		<div className={styles.about}>
			<div className={styles.about__item}>
				<div className={styles.about__item_img}>
					<MoneyImg />
				</div>
				<h3 className={styles.about__item_title}>Up to 50 000 ₽</h3>
				<p className={styles.about__item_text}>
					Cash and transfers without commission and percent
				</p>
			</div>
			<div className={clsx(styles.about__item, styles.about__item_active)}>
				<div className={styles.about__item_img}>
					<CalendarImg />
				</div>
				<h3 className={styles.about__item_title}>Up to 160 days</h3>
				<p className={styles.about__item_text}>Without percent on the loan</p>
			</div>
			<div className={styles.about__item}>
				<div className={styles.about__item_img}>
					<ClockImg />
				</div>
				<h3 className={styles.about__item_title}>Free delivery</h3>
				<p className={styles.about__item_text}>
					We will deliver your card by courier at a convenient place and time
					for you
				</p>
			</div>
			<div className={clsx(styles.about__item, styles.about__item_active)}>
				<div className={styles.about__item_img}>
					<ShoppingBagImg />
				</div>
				<h3 className={styles.about__item_title}>Up to 12 months</h3>
				<p className={styles.about__item_text}>
					No percent. For equipment, clothes and other purchases in installments
				</p>
			</div>
			<div className={styles.about__item}>
				<div className={styles.about__item_img}>
					<CardImg />
				</div>
				<h3 className={styles.about__item_title}>
					Convenient deposit and withdrawal
				</h3>
				<p className={styles.about__item_text}>
					At any ATM. Top up your credit card for free with cash or transfer
					from other cards
				</p>
			</div>
		</div>
	)
}

export default About
