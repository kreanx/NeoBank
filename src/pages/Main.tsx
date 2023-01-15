import Features from 'pages/Features/Features'
import Cards from './Cards/Cards'
import Exchange from '../components/Exchange/Exchange'
import Map from './Map/Map'
import News from '../components/News/News'
import Support from '../components/Support/Support'

const Main: React.FC = () => {
	return (
		<>
			<Cards />
			<Features />
			<Exchange />
			<Map />
			<News />
			<Support />
		</>
	)
}

export default Main
