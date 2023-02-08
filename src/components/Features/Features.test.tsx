import { render, screen } from '@testing-library/react'
import featuresContent from './Content'
import Features from './Features'
import '@testing-library/jest-dom/extend-expect'

describe('Features', () => {
	it('renders the component', () => {
		const { getByTestId } = render(<Features />)

		expect(getByTestId('features')).toBeInTheDocument()
	})

	it('renders the title', () => {
		const { getByTestId } = render(<Features />)

		expect(getByTestId('h2')).toBeInTheDocument()
	})

	it('renders the subtitle', () => {
		const { getByTestId } = render(<Features />)

		expect(getByTestId('h3')).toBeInTheDocument()
	})

	it('renders the list of features', () => {
		render(<Features />)

		const list = screen.getByRole('list')
		expect(list).toBeInTheDocument()
	})

	it('renders the correct number of features', () => {
		render(<Features />)

		const listItems = screen.getAllByRole('listitem')
		expect(listItems).toHaveLength(featuresContent.length)
	})
})
