import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import PinCode from './PinCode'

describe('PinCode', () => {
	const amount = 4
	it('should render PinCode component', () => {
		const { getByTestId } = render(<PinCode amount={amount} />)
		expect(getByTestId('pin-code')).toBeInTheDocument()
	})
	it('should render input elements', () => {
		const { getAllByTestId } = render(<PinCode amount={amount} />)
		expect(getAllByTestId('input-item')).toHaveLength(amount)
	})
	it('should render error message when invalid confirmation code entered', () => {
		const isValid = false
		const { getByText } = render(<PinCode amount={amount} isValid={isValid} />)
		expect(getByText('Invalid confirmation code')).toBeInTheDocument()
	})
	it('should call select method of target onFocus event', () => {
		const selectMock = jest.fn()
		const eventMock = { target: { select: selectMock } }
		const { getAllByTestId } = render(<PinCode amount={amount} />)
		fireEvent.focus(getAllByTestId('input-item')[0], eventMock)
		expect(selectMock).toHaveBeenCalledTimes(1)
	})
})
