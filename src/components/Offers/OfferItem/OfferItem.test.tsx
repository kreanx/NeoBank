import { render, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from 'store'
import OfferItem from './OfferItem'
import '@testing-library/jest-dom/extend-expect'

const mockApplyOffer = jest.fn()
const mockSetIsLoading = jest.fn()

const testProps = {
	applicationId: 12345,
	rate: '10',
	time: '6',
	isInsuranceEnabled: true,
	isSalaryClient: true,
	monthlyPayment: '100',
	requestedAmount: '1000',
	totalAmount: '1200',
	applyOffer: mockApplyOffer,
	setIsLoading: mockSetIsLoading,
}

describe('OfferItem', () => {
	it('calls applyOffer and setIsLoading when the select button is clicked', () => {
		const { getByText } = render(
			<Provider store={store}>
				<OfferItem {...testProps} />
			</Provider>
		)

		fireEvent.click(getByText('Select'))

		expect(mockApplyOffer).toHaveBeenCalled()
		expect(mockSetIsLoading).toHaveBeenCalledWith(true)
	})
})
