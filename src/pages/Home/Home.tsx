import Cards from 'components/Cards/Cards'
import Features from 'components/Features/Features'
import Container from 'ui-kit/Container/Container'
import Exchange from 'components/Exchange/Exchange'
import News from 'components/News/News'
import SubscribeNews from 'components/SubscribeNews/SubscribeNews'
import styles from './Home.module.scss'
import map from 'img/home/map.png'

const Home: React.FC = () => {
	return (
		<>
			<Cards />
			<Features />
			<Exchange />
			<section className={styles.map}>
				<Container>
					<div className={styles.map__wrapper}>
						<h2 className={styles.map__title}>
							You can use our services anywhere in&nbsp;the world
						</h2>
						<h3 className={styles.map__subtitle}>
							Withdraw and transfer money online through our application
						</h3>
						<img className={styles.map__img} src={map} alt="map" />
					</div>
				</Container>
			</section>
			<News />
			<SubscribeNews />
		</>
	)
}

export default Home
