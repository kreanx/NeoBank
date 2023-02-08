import { render } from '@testing-library/react'
import FAQ from './FAQ'
import '@testing-library/jest-dom/extend-expect'

describe('FAQ', () => {
	it('FAQ renders correctly', () => {
		const { getByText } = render(<FAQ />)

		expect(getByText('Using a credit card')).toBeInTheDocument()
	})
})
