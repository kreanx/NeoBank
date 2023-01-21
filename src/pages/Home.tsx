import Cards from 'components/Cards/Cards'
import Features from 'components/Features/Features'
import Container from 'ui-kit/Container/Container'
import Exchange from '../components/Exchange/Exchange'
import News from '../components/News/News'
import SunscribeNews from '../components/SubscribeNews/SubscribeNews'
import mapStyles from '../components/Map/Map.module.scss'
import map from '../img/home/map.png'

const Home: React.FC = () => {
	return (
		<>
			<Cards />
			<Features />
			<Exchange />
			<section className={mapStyles.map}>
				<Container>
					<div className={mapStyles.map__wrapper}>
						<h2 className={mapStyles.map__title}>
							You can use our services anywhere in&nbsp;the world
						</h2>
						<h3 className={mapStyles.map__subtitle}>
							Withdraw and transfer money online through our application
						</h3>
						<img className={mapStyles.map__img} src={map} alt="map" />
					</div>
				</Container>
			</section>
			<News />
			<SunscribeNews />
		</>
	)
}

export default Home
