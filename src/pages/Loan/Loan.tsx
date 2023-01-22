import DigitalCard from 'components/DigitalCard/DigitalCard'
import { howToCardContent } from 'pages/Loan/Content'
import LoanForm from 'components/Prescoring/Prescoring'
import Container from 'ui-kit/Container/Container'
import Tabs from 'components/Tabs/Tabs'
import styles from './Loan.module.scss'

const Loan: React.FC = () => {
	return (
		<>
			<DigitalCard />
			<Tabs />
			<div className={styles.howto}>
				<Container>
					<div className={styles.howto__wrapper}>
						<h2 className={styles.howto__title}>How to get a card</h2>
						<div className={styles.howto__blocks}>
							{howToCardContent.map((item, i) => {
								return (
									<div key={i} className={styles.howto__block}>
										<div className={styles.howto__block_top}>
											<div className={styles.howto__count}>{item.count}</div>
											<div className={styles.howto__divider}></div>
										</div>
										<div className={styles.howto__block_content}>
											<p className={styles.howto__text}>{item.text}</p>
										</div>
									</div>
								)
							})}
						</div>
					</div>
				</Container>
			</div>
			<LoanForm />
		</>
	)
}

export default Loan
