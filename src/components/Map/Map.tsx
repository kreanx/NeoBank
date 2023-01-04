import Container from '../Container/Container'
import styles from './Map.module.scss'
import map from '../../img/home/map.png'

const Map: React.FC = () => {
	return (
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
	)
}

export default Map
