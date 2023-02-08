import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Header from './Header'
import '@testing-library/jest-dom/extend-expect'

describe('Header', () => {
	it('renders the header', () => {
		render(
			<MemoryRouter>
				<Header />
			</MemoryRouter>
		)

		expect(screen.getByText('NeoBank')).toBeInTheDocument()
		expect(screen.getAllByText('Credit card')).toHaveLength(2)
		expect(screen.getAllByText('Product')).toHaveLength(2)
		expect(screen.getAllByText('Account')).toHaveLength(2)
		expect(screen.getAllByText('Resources')).toHaveLength(2)
		expect(screen.getAllByRole('button')[0]).toBeInTheDocument()
	})

	it('renders the header with a disabled button', () => {
		const { container } = render(
			<MemoryRouter>
				<Header />
			</MemoryRouter>
		)

		expect(container.getElementsByClassName('header__button')[0]).toBeDisabled()
	})

	it('renders the mobile menu when the toggle is clicked', () => {
		const { container } = render(
			<MemoryRouter>
				<Header />
			</MemoryRouter>
		)

		fireEvent.click(container.getElementsByClassName('header__button')[0])

		expect(screen.getAllByText('Credit card')).toHaveLength(2)
		expect(screen.getAllByText('Product')).toHaveLength(2)
		expect(screen.getAllByText('Account')).toHaveLength(2)
		expect(screen.getAllByText('Resources')).toHaveLength(2)
	})
})
