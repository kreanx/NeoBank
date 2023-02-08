import { render, fireEvent } from '@testing-library/react'
import TabsButton from './TabsButtons'
import '@testing-library/jest-dom/extend-expect'

describe('TabsButton', () => {
	test('TabsButton should render label', () => {
		const mockActiveHandler = jest.fn()
		const { getByText } = render(
			<TabsButton
				style="style"
				activeStyle="activeStyle"
				id="1"
				isActive="false"
				activeHandler={mockActiveHandler}
				label="Hello"
			/>
		)
		expect(getByText('Hello')).toBeInTheDocument()
	})
	test('TabsButton should call activeHandler on click', () => {
		const mockActiveHandler = jest.fn()
		const { getByText } = render(
			<TabsButton
				style="style"
				activeStyle="activeStyle"
				id="1"
				isActive="false"
				label="Hello"
				activeHandler={mockActiveHandler}
			/>
		)
		fireEvent.click(getByText('Hello'))
		expect(mockActiveHandler).toHaveBeenCalled()
	})
})
