import { render } from '@testing-library/react'
import DigitalCard from './DigitalCard'
import { Provider } from 'react-redux'
import store from 'store'
import '@testing-library/jest-dom/extend-expect'

describe('DigitalCard', () => {
	it('renders correctly with initial state', () => {
		const { getByText } = render(
			<Provider store={store}>
				<DigitalCard />
			</Provider>
		)

		expect(getByText('Apply for card')).toBeInTheDocument()
		expect(getByText('Platinum digital credit card')).toBeInTheDocument()
		expect(getByText('Up to 160 days')).toBeInTheDocument()
	})
})
