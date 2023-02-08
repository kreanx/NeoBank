import { render, fireEvent } from '@testing-library/react'
import { Button } from './Button'
import '@testing-library/jest-dom/extend-expect'

describe('Button', () => {
	it('renders the label correctly', () => {
		const { getByTestId } = render(<Button label="Click me" />)
		expect(getByTestId('button')).toBeInTheDocument()
	})
	it('calls the onClick function when clicked', () => {
		const mockOnClick = jest.fn()
		const { getByTestId } = render(
			<Button label="button" onClick={mockOnClick} />
		)
		fireEvent.click(getByTestId('button'))
		expect(mockOnClick).toHaveBeenCalled()
	})
	it('disables the button when disabled is true', () => {
		const { getByTestId } = render(<Button label="Click me" disabled />)
		expect(getByTestId('button')).toBeDisabled()
	})
	it('applies custom style when provided', () => {
		const customStyle = 'custom-style'
		const { getByTestId } = render(
			<Button label="Click me" customStyle={customStyle} />
		)
		expect(getByTestId('button')).toHaveClass(customStyle)
	})
})
