import { render } from '@testing-library/react'
import Cashback from './Cashback'
import cashbackContent from './Content'
import '@testing-library/jest-dom/extend-expect'

describe('Cashback', () => {
	it('renders cashback content correctly', () => {
		const { getByText } = render(<Cashback />)

		const titleElement = getByText(cashbackContent[4].title)
		expect(titleElement).toBeInTheDocument()

		const textElement = getByText(cashbackContent[4].text)
		expect(textElement).toBeInTheDocument()
	})
})
