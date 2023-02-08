import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import store from 'store'
import ConfirmationComplete from './ConfirmationComplete'

describe('ConfirmationComplete component', () => {
	it('renders confirmation complete', () => {
		render(
			<MemoryRouter>
				<Provider store={store}>
					<ConfirmationComplete />
				</Provider>
			</MemoryRouter>
		)

		const img = screen.getByAltText('confirmed')
		const title = screen.getByText(
			'Congratulations! You have completed your new credit card.'
		)
		const subtitle = screen.getByText(
			'Your credit card will arrive soon. Thank you for choosing us!'
		)
		const button = screen.getByText('View other offers of our bank')

		expect(img).toBeInTheDocument()
		expect(title).toBeInTheDocument()
		expect(subtitle).toBeInTheDocument()
		expect(button).toBeInTheDocument()
	})
})
