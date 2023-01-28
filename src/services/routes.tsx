import ApplicationId from 'components/ApplicationId/ApplicationId'
import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import NotFound from 'components/NotFound/NotFound'
import Home from 'pages/Home/Home'
import Loan from 'pages/Loan/Loan'
import TableDocument from '../components/TableDocument/TableDocument'
import {
	createBrowserRouter,
	createRoutesFromElements,
	Outlet,
	Route,
} from 'react-router-dom'
import SigningDocuments from '../components/SigningDocuments/SigningDocuments'
import ConfirmationCode from '../components/ConfirmationCode/ConfirmationCode'

export const enum routes {
	notFound = '/*',
	home = '/',
	loan = '/loan',
	applicationId = 'loan/:applicationId',
	table = 'loan/:applicationId/document',
	document = 'loan/:applicationId/document/sign',
	code = 'loan/:applicationId/code',
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
			<Route path={routes.notFound} element={<NotFound />} />
			<Route path={routes.home} index element={<Home />} />
			<Route path={routes.loan} element={<Loan />} />
			<Route path={routes.applicationId} element={<ApplicationId />} />
			<Route path={routes.table} element={<TableDocument />} />
			<Route path={routes.document} element={<SigningDocuments />} />
			<Route path={routes.code} element={<ConfirmationCode />} />
		</Route>
	)
)
