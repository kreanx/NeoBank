import Container from '../../ui-kit/Container/Container'
import styles from './Cards.module.scss'
import { Button } from '../../ui-kit/Button/Button'
import { Link } from 'react-router-dom'
import { routes } from 'services/routes'
import cardContent from './Content'

const Cards: React.FC = () => {
	return (
		<section className={styles.cards}>
			<Container>
				<div className={styles.cards__wrapper}>
					<div className={styles.cards__block}>
						<h1 className={styles.cards__title}>
							Choose the design you like and apply for card right now
						</h1>
						<Link to={routes.loan}>
							<Button
								label="Choose the card"
								customStyle={styles.cards__button}
							/>
						</Link>
					</div>
					<div className={styles.cards__block}>
						{cardContent.map((item, i) => {
							return (
								<div key={i} className={styles.cards__block_card}>
									<img src={item.img} alt="card" />
								</div>
							)
						})}
					</div>
				</div>
			</Container>
		</section>
	)
}

export default Cards
