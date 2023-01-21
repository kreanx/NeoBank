import DigitalCard from 'components/DigitalCard/DigitalCard'
import howToCardContent from 'components/HowToCard/content'
import LoanForm from 'components/Prescoring/Prescoring'
import Container from 'ui-kit/Container/Container'
import Tabs from '../components/Tabs/Tabs'
import howToStyles from '../components/HowToCard/HowToCard.module.scss'

const Loan: React.FC = () => {
	return (
		<>
			<DigitalCard />
			<Tabs />
			<div className={howToStyles.howto}>
				<Container>
					<div className={howToStyles.howto__wrapper}>
						<h2 className={howToStyles.howto__title}>How to get a card</h2>
						<div className={howToStyles.howto__blocks}>
							{howToCardContent.map((item, i) => {
								return (
									<div key={i} className={howToStyles.howto__block}>
										<div className={howToStyles.howto__block_top}>
											<div className={howToStyles.howto__count}>
												{item.count}
											</div>
											<div className={howToStyles.howto__divider}></div>
										</div>
										<div className={howToStyles.howto__block_content}>
											<p className={howToStyles.howto__text}>{item.text}</p>
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
