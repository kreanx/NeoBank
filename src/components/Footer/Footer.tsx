import Container from '../../ui-kit/Container/Container'
import styles from './Footer.module.scss'
import logoImg from '../../img/icons/logo.png'
import footerLinks from './Content'

const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__bg}>
				<Container>
					<div className={styles.footer__wrapper}>
						<div className={styles.footer__top}>
							<img
								alt="logo"
								src={logoImg}
								className={styles.footer__logo}
							></img>
							<div className={styles.footer__info}>
								<a href="tel:+7(495)9842513" className={styles.footer__number}>
									+7 (495) 984 25 13
								</a>
								<a
									href="mailto:info@neoflex.ru"
									className={styles.footer__email}
								>
									info@neoflex.ru
								</a>
							</div>
						</div>
						<ul className={styles.footer__tags}>
							{footerLinks.map((item, i) => {
								return (
									<li key={i} className={styles.footer__tags_item}>
										{item}
									</li>
								)
							})}
						</ul>
						<div className={styles.footer__line}></div>
						<p className={styles.footer__cookies}>
							We&nbsp;use cookies to&nbsp;personalize our services and improve
							the user experience of our website. Cookies are small files
							containing information about previous visits
							to&nbsp;a&nbsp;website. If you do&nbsp;not want to&nbsp;use
							cookies, please change your browser settings
						</p>
					</div>
				</Container>
			</div>
		</footer>
	)
}

export default Footer
