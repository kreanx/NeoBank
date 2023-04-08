import { fireEvent, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import NotFound from './NotFound'
import '@testing-library/jest-dom/extend-expect'

describe('NotFound', () => {
	it('should display the page not found message', () => {
		const { getByText } = render(
			<MemoryRouter>
				<NotFound />
			</MemoryRouter>
		)
		const title = getByText(/Oops..../i)
		const subtitle = getByText(/Page not found/i)
		const text = getByText(
			/This Page doesn`t exist or was removed! We suggest you go back./i
		)

		expect(title).toBeInTheDocument()
		expect(subtitle).toBeInTheDocument()
		expect(text).toBeInTheDocument()
	})

	it('should navigate to home page when Go back button is clicked', () => {
		const { getByText } = render(
			<MemoryRouter>
				<NotFound />
			</MemoryRouter>
		)
		const button = getByText('Go back')
		fireEvent.click(button)

		expect(window.location.pathname).toBe('/')
	})
})
