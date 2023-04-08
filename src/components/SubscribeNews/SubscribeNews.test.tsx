import { render } from '@testing-library/react'
import SubscribeNews from './SubscribeNews'
import '@testing-library/jest-dom/extend-expect'

const setup = () => {
	const utils = render(<SubscribeNews />)
	const emailInput = utils.getByPlaceholderText('Your email')
	const submitButton = utils.getByText('Subscribe')
	return {
		emailInput,
		submitButton,
		...utils,
	}
}

describe('SubscribeNews', () => {
	it('renders without crashing', () => {
		render(<SubscribeNews />)
	})

	it('displays the subscribe form by default', () => {
		const { emailInput, submitButton } = setup()
		expect(emailInput).toBeInTheDocument()
		expect(submitButton).toBeInTheDocument()
	})

	it('displays a message if already subscribed', async () => {
		jest
			.spyOn(localStorage.__proto__, 'getItem')
			.mockImplementation(() => 'true')
		const { getByText } = render(<SubscribeNews />)
		const subscribedMessage = getByText(/You are already subscribed/i)
		expect(subscribedMessage).toBeInTheDocument()
	})
})
