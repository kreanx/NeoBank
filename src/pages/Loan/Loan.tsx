import DigitalCard from 'components/DigitalCard/DigitalCard'
import { guideContent } from 'pages/Loan/Content'
import LoanForm from 'components/Prescoring/Prescoring'
import Container from 'ui-kit/Container/Container'
import Tabs from 'components/Tabs/Tabs'
import styles from './Loan.module.scss'
import Offers from '../../components/Offers/Offers'
import PreliminaryConfirmed from 'components/Prescoring/PreliminaryConfirmed/PreliminaryConfirmed'
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
			<div className={styles.guide}>
				<Container>
					<div className={styles.guide__wrapper}>
						<h2 className={styles.guide__title}>How to get a card</h2>
						<div className={styles.guide__blocks}>
							{guideContent.map((item, i) => {
								return (
									<div key={i} className={styles.guide__block}>
										<div className={styles.guide__block_top}>
											<div className={styles.guide__count}>{item.count}</div>
											<div className={styles.guide__divider}></div>
										</div>
										<div className={styles.guide__block_content}>
											<p className={styles.guide__text}>{item.text}</p>
										</div>
									</div>
								)
							})}
						</div>
					</div>
				</Container>
			</div>
			{state < 3 ? templates[state].element : templates[2].element}
		</>
	)
}

export default Loan
