import { render } from '@testing-library/react'
import { AccordionItem } from './AccordionItem'
import '@testing-library/jest-dom/extend-expect'

describe('AccordionItem', () => {
	let wrapper
	beforeEach(() => {
		const content =
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, nisi.'
		const title = 'Section 1'
		const isOpen = false
		const openHandler = jest.fn()
		const index = 0
		wrapper = render(
			<AccordionItem
				content={content}
				title={title}
				isOpen={isOpen}
				openHandler={openHandler}
				index={index}
			/>
		)
	})
	it('should render the component', () => {
		expect(wrapper).toBeTruthy()
	})
	it('should have a `div` with classname `accordion`', () => {
		expect(wrapper.container.querySelector('div')).toHaveClass('accordion')
	})
	it('should display the correct title', () => {
		expect(wrapper.getByText('Section 1')).toBeTruthy()
	})
})
