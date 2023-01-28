import DigitalCard from 'components/DigitalCard/DigitalCard'
import { howToCardContent } from 'pages/Loan/Content'
import LoanForm from 'components/Prescoring/Prescoring'
import Container from 'ui-kit/Container/Container'
import Tabs from 'components/Tabs/Tabs'
import styles from './Loan.module.scss'
import Offers from '../../components/Offers/Offers'
import PreliminaryConfirmed from 'components/PreliminaryConfirmed/PreliminaryConfirmed'
import { useAppSelector } from 'hook'

const Loan: React.FC = () => {
	const state = useAppSelector((state) => state.mainStepReducer.current)

	const templates = [
		{
			element: <LoanForm />,
		},
		{
			element: <Offers />,
		},
		{
			element: <PreliminaryConfirmed />,
		},
	]

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
			{templates[state].element}
		</>
	)
}

export default Loan
