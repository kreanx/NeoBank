import DigitalCard from 'pages/DigitalCard/DigitalCard'
import HowToCard from 'pages/HowToCard/HowtoCard'
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
