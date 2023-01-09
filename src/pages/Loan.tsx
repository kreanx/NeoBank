import DigitalCard from 'components/DigitalCard/DigitalCard'
import HowToCard from 'components/HowToCard/HowtoCard'
import LoanForm from 'components/Prescoring/Prescoring'
import Tabs from '../components/Tabs/Tabs'

const Loan: React.FC = () => {
	return (
		<>
			<DigitalCard />
			<Tabs />
			<HowToCard />
			<LoanForm />
		</>
	)
}

export default Loan
