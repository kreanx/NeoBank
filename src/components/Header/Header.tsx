import { Button } from '../../ui-kit/Button/Button'
import Container from '../../ui-kit/Container/Container'
import styles from './Header.module.scss'
import { Link, NavLink } from 'react-router-dom'
import { routes } from 'services/routes'

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<Container>
				<nav className={styles.header__nav}>
					<Link to={routes.home}>
						<div className={styles.header__logo}>NeoBank</div>
					</Link>
					<ul className={styles.header__links}>
						<li className={styles.header__links_link}>
							<NavLink
								to={routes.loan}
								className={({ isActive }) =>
									isActive ? styles.active : undefined
								}
							>
								Credit card
							</NavLink>
						</li>
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
							<Link to={routes.loan}>
								<div className={styles.burger__item}>Credit card</div>
							</Link>
						</li>
						<li>
							<div className={styles.burger__item}>Product</div>
						</li>
						<li>
							<div className={styles.burger__item}>Account</div>
						</li>
						<li>
							<div className={styles.burger__item}>Resources</div>
						</li>
						<li>
							<Button
								label="Online Bank"
								customStyle={styles.burger__item_btn}
							/>
						</li>
					</ul>
				</nav>
			</Container>
		</header>
	)
}

export default Header
