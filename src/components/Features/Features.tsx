import Container from 'ui-kit/Container/Container'
import CheckFeatures from 'img/tsIcons/CheckFeatures'
import styles from './Features.module.scss'
import Illustration from '../../img/home/Illustration_man.png'
import featuresContent from './Content'

const Features: React.FC = () => {
	return (
		<section className={styles.features} data-testid="features">
			<Container>
				<div className={styles.features__wrapper}>
					<div className={styles.features__img}>
						<img src={Illustration} alt="illustration" />
					</div>
					<div className={styles.features__textblock}>
						<h2 data-testid="h2" className={styles.features__title}>
							We&nbsp;Provide Many Features You Can Use
						</h2>
						<h3 data-testid="h3" className={styles.features__subtitle}>
							You can explore the features that we&nbsp;provide with fun and
							have their own functions each feature
						</h3>
						<ul className={styles.features__list}>
							{featuresContent.map((item, i) => {
								return (
									<div key={i} className={styles.features__list_block}>
										<CheckFeatures />
										<li className={styles.features__list_item}>{item.text}</li>
									</div>
								)
							})}
						</ul>
					</div>
				</div>
			</Container>
		</section>
	)
}

export default Features
