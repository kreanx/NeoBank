import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import AboutCard from './AboutCard'

test('card renders correctly', () => {
	render(<AboutCard />)
	const cardElement = screen.getByText(/installments/i)
	expect(cardElement).toBeInTheDocument()
})
