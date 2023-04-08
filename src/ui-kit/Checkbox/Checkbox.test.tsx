import { render, fireEvent } from '@testing-library/react'
import { Checkbox } from './Checkbox'
import '@testing-library/jest-dom/extend-expect'

describe('Checkbox', () => {
	it('should render a checkbox and label', () => {
		const { getByText } = render(
			<Checkbox
				checked={false}
				onChange={() => null}
				label="Test Label"
				name="testName"
				value="testValue"
			/>
		)
		expect(getByText('Test Label')).toBeInTheDocument()
	})
	it('should call the onChange function when clicked', () => {
		const mockOnChange = jest.fn()
		const { getByLabelText } = render(
			<Checkbox
				checked={false}
				onChange={mockOnChange}
				label="Test Label"
				name="testName"
				value="testValue"
			/>
		)
		fireEvent.click(getByLabelText('Test Label'))
		expect(mockOnChange).toHaveBeenCalledTimes(1)
	})
	it('should have the customStyle class applied to the label when passed in', () => {
		const { getByTestId } = render(
			<Checkbox
				checked={false}
				onChange={() => null}
				label="Test Label"
				name="testName"
				value="testValue"
				customStyle="custom-style"
			/>
		)
		expect(getByTestId('custom-style')).toHaveClass('custom-style')
	})
	it('should add the checked class to the checkmark when checked is true', () => {
		const { getByTestId } = render(
			<Checkbox
				checked={true}
				onChange={() => null}
				label="Test Label"
				name="testName"
				value="testValue"
			/>
		)
		expect(getByTestId('checked')).toHaveClass('checked')
	})
})
