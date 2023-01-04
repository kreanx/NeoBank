import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Cards from '../components/Cards/Cards'
import Exchange from '../components/Exchange/Exchange'
import Map from '../components/Map/Map'
import News from '../components/News/News'
import Support from '../components/Support/Support'

const Main: React.FC = () => {
	return (
		<>
			<Header />
			<Cards />
			<Exchange />
			<Map />
			<News />
			<Support />
			<Footer />
		</>
	)
}

export default Main
