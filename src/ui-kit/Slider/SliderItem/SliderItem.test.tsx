import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import SliderItem from './SliderItem'
describe('SliderItem', () => {
	const sizeHandler = jest.fn()
	const item = {
		img: 'https://image.jpg',
		title: 'Test Title',
		description: 'Test Description',
		url: 'https://testurl.com',
	}
	it('should render the component correctly', () => {
		const { getByText } = render(
			<SliderItem
				i={0}
				item={item}
				handleImgError={() => null}
				sizeHandler={sizeHandler}
			/>
		)
		expect(getByText('Test Title')).toBeInTheDocument()
		expect(getByText('Test Description')).toBeInTheDocument()
	})
	it('should call sizeHandler when component mounts', () => {
		render(
			<SliderItem
				i={0}
				item={item}
				handleImgError={() => null}
				sizeHandler={sizeHandler}
			/>
		)
		expect(sizeHandler).toHaveBeenCalledTimes(1)
	})
})
