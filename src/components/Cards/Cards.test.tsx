import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { routes } from 'services/routes'
import Cards from './Cards'
import cardContent from './Content'
import '@testing-library/jest-dom/extend-expect'

describe('Cards', () => {
	it('renders the title and a button', () => {
		render(
			<MemoryRouter>
				<Cards />
			</MemoryRouter>
		)

		const title = screen.getByText(
			/Choose the design you like and apply for card right now/
		)
		expect(title).toBeInTheDocument()

		const button = screen.getByRole('button', { name: 'Choose the card' })
		expect(button).toBeInTheDocument()
	})

	it('renders the correct number of card images', () => {
		render(
			<MemoryRouter>
				<Cards />
			</MemoryRouter>
		)

		const cards = screen.getAllByRole('img')
		expect(cards.length).toBe(cardContent.length)
	})

	it('button links to the correct page', () => {
		render(
			<MemoryRouter>
				<Cards />
			</MemoryRouter>
		)

		const link = screen.getByRole('link', { name: 'Choose the card' })
		expect(link).toHaveAttribute('href', routes.loan)
	})
})
