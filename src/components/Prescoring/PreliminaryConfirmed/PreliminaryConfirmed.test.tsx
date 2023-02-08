import { render, screen } from '@testing-library/react'
import PreliminaryConfirmed from './PreliminaryConfirmed'
import '@testing-library/jest-dom/extend-expect'

describe('PreliminaryConfirmed', () => {
	test('renders with correct text', () => {
		render(<PreliminaryConfirmed />)
		const title = screen.getByText(
			/The preliminary decision has been sent to your email./
		)
		const subtitle = screen.getByText(
			/In the letter you can get acquainted with the preliminary decision on the credit card./
		)
		expect(title).toBeInTheDocument()
		expect(subtitle).toBeInTheDocument()
	})
})
