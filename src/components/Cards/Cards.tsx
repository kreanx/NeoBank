import Container from '../Container/Container'
import styles from './Cards.module.scss'
import card1 from '../../img/cards/cardimage_1.jpg'
import card2 from '../../img/cards/cardimage_2.jpg'
import card3 from '../../img/cards/cardimage_3.jpg'
import card4 from '../../img/cards/cardimage_4.jpg'
import { Button } from '../../ui-kit/Button/Button'

const Cards: React.FC = () => {
	return (
		<section className={styles.cards}>
			<Container>
				<div className={styles.cards__wrapper}>
					<div className={styles.cards__block}>
						<h1 className={styles.cards__title}>
							Choose the design you like and apply for card right now
						</h1>
						<Button
							label="Choose the card"
							customStyle={styles.cards__button}
						/>
					</div>
					<div className={styles.cards__block}>
						<div className={styles.cards__block_card}>
							<img src={card1} alt="card1" />
						</div>
						<div className={styles.cards__block_card}>
							<img src={card2} alt="card2" />
						</div>
						<div className={styles.cards__block_card}>
							<img src={card3} alt="card3" />
						</div>
						<div className={styles.cards__block_card}>
							<img src={card4} alt="card4" />
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}

export default Cards
