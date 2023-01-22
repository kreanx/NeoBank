import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import Home from 'pages/Home/Home'
import Loan from 'pages/Loan/Loan'
import {
	createBrowserRouter,
	createRoutesFromElements,
	Outlet,
	Route,
} from 'react-router-dom'

export const enum routes {
	home = '/',
	loan = '/loan',
}

const Root: React.FC = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	)
}

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root />}>
			<Route path={routes.home} index element={<Home />} />
			<Route path={routes.loan} element={<Loan />} />
		</Route>
	)
)
