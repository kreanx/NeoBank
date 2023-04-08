import { render, fireEvent } from '@testing-library/react'
import SliderArrow from './SliderArrow'
describe('SliderArrow', () => {
	const element = { current: null }
	const refer = { current: null }
	it('should call the scroll handler when clicked', () => {
		const scrollHandler = jest.fn()
		const customStyle = 'customStyle'
		const disabled = false
		const direction = 'next'
		const amount = 1
		const { getByTestId } = render(
			<SliderArrow
				customStyle={customStyle}
				scrollHandler={scrollHandler}
				element={element}
				refer={refer}
				disabled={disabled}
				direction={direction}
				amount={amount}
			/>
		)
		fireEvent.click(getByTestId('slider-arrow'))
		expect(scrollHandler).toHaveBeenCalledWith(element, amount, direction)
	})
})
