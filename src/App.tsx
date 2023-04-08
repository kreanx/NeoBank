import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { router } from 'services/routes'
import store, { persistor } from 'store/index'

const App = () => {
	return (
		<>
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<RouterProvider router={router} />
				</PersistGate>
			</Provider>
		</>
	)
}

export default App
