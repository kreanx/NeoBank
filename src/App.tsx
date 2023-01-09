import Footer from 'components/Footer/Footer'
import Loan from 'pages/Loan'
import Main from './pages/Main'
import Header from './components/Header/Header'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/loan" element={<Loan />} />
			</Routes>
			<Footer />
		</Router>
	)
}

export default App
