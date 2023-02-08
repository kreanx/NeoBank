import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Modal from './Modal'

describe('Modal', () => {
	it('renders the title, text, and buttons correctly', () => {
		const title = 'Modal Title'
		const text = 'Modal Text'
		const firstButton = 'First Button'
		const secondButton = 'Second Button'

		const { getByText } = render(
			<Modal
				title={title}
				text={text}
				firstButton={firstButton}
				secondButton={secondButton}
			/>
		)

		expect(getByText(title)).toBeInTheDocument()
		expect(getByText(text)).toBeInTheDocument()
		expect(getByText(firstButton)).toBeInTheDocument()
		expect(getByText(secondButton)).toBeInTheDocument()
	})

	it('calls the closeHandler when the close icon is clicked', () => {
		const closeHandler = jest.fn()

		const { getByTestId } = render(
			<Modal closeHandler={closeHandler} text="test" title="test" />
		)

		fireEvent.click(getByTestId('close-icon'))
		expect(closeHandler).toHaveBeenCalled()
	})

	it('calls the firstBtnHandler when the first button is clicked', () => {
		const firstBtnHandler = jest.fn()
		const firstButton = 'First Button'

		const { getByText } = render(
			<Modal
				firstButton={firstButton}
				firstBtnHandler={firstBtnHandler}
				text="test"
				title="test"
			/>
		)

		fireEvent.click(getByText(firstButton))
		expect(firstBtnHandler).toHaveBeenCalled()
	})

	it('calls the secondBtnHandler when the second button is clicked', () => {
		const secondBtnHandler = jest.fn()
		const secondButton = 'Second Button'

		const { getByText } = render(
			<Modal
				secondButton={secondButton}
				secondBtnHandler={secondBtnHandler}
				text="test"
				title="test"
			/>
		)

		fireEvent.click(getByText(secondButton))
		expect(secondBtnHandler).toHaveBeenCalled()
	})
})
