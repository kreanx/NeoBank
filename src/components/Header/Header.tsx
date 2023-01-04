import { Button } from '../../ui-kit/Button/Button'
import Container from '../Container/Container'
import styles from './Header.module.scss'

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<Container>
				<nav className={styles.header__nav}>
					<a className={styles.header__logo} href="/">
						NeoBank
					</a>
					<ul className={styles.header__links}>
						<li className={styles.header__links_link}>Credit card</li>
						<li className={styles.header__links_link}>Product</li>
						<li className={styles.header__links_link}>Account</li>
						<li className={styles.header__links_link}>Resources</li>
					</ul>
					<Button
						label="Online Bank"
						customStyle={styles.header__button}
						disabled={true}
					/>
					<input
						className={styles.burger__toggle}
						id="burger__toggle"
						type="checkbox"
					/>
					<label className={styles.burger__btn} htmlFor="burger__toggle">
						<span></span>
					</label>
					<ul className={styles.burger__box}>
						<li>
							<a className={styles.burger__item} href="#">
								Credit card
							</a>
						</li>
						<li>
							<a className={styles.burger__item} href="#">
								Product
							</a>
						</li>
						<li>
							<a className={styles.burger__item} href="#">
								Account
							</a>
						</li>
						<li>
							<a className={styles.burger__item} href="#">
								Resources
							</a>
						</li>
						<li>
							добавить BUTTON
							<a className={styles.burger__item} href="#">
								Online Bank
							</a>
						</li>
					</ul>
				</nav>
			</Container>
		</header>
	)
}

export default Header
