import { render } from '@testing-library/react'
import ExchangeItem from './ExchangeItem'
import '@testing-library/jest-dom/extend-expect'

const props = {
	currencyAmount: '70',
	currencyName: 'USD',
}

describe('ExchangeItem component', () => {
	it('renders currency amount and name', () => {
		const { getByText } = render(
			<ExchangeItem
				currencyAmount={props.currencyAmount}
				currencyName={props.currencyName}
			/>
		)
		const amount = getByText(props.currencyAmount)
		const name = getByText(props.currencyAmount)

		expect(amount).toBeInTheDocument()
		expect(name).toBeInTheDocument()
	})
})
