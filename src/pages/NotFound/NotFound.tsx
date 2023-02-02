import styles from './NotFound.module.scss'
import Container from 'ui-kit/Container/Container'
import errorImg from 'img/404/404.png'
import { Button } from 'ui-kit/Button/Button'
import { Link } from 'react-router-dom'
import { routes } from 'services/routes'

const NotFound: React.FC = () => {
	return (
		<section className={styles.notFound}>
			<Container>
				<div className={styles.notFound__wrapper}>
					<div className={styles.notFound__block}>
						<h1 className={styles.notFound__title}>Oops....</h1>
						<h2 className={styles.notFound__subtitle}>Page not found</h2>
						<p className={styles.notFound__text}>
							This Page doesn`t exist or was removed! We suggest you go back.
						</p>
						<Link to={routes.home}>
							<Button label="Go back" customStyle={styles.notFound__button} />
						</Link>
					</div>
					<div className={styles.notFound__block}>
						<div className={styles.notFound__img}>
							<img src={errorImg} alt="404" />
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}

export default NotFound
