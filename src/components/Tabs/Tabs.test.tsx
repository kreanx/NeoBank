import { render } from '@testing-library/react'
import Tabs from './Tabs'
import '@testing-library/jest-dom/extend-expect'

describe('Tabs', () => {
	it('should render the tabs and buttons correctly', () => {
		const { getByText } = render(<Tabs />)
		expect(getByText('About card')).toBeInTheDocument()
		expect(getByText('Rates and conditions')).toBeInTheDocument()
		expect(getByText('Cashback')).toBeInTheDocument()
		expect(getByText('FAQ')).toBeInTheDocument()
	})
})
