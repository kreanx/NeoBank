import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Tooltip from './Tooltip'

describe('Tooltip component', () => {
	it('should render the label and content of the tooltip', () => {
		const label = 'This is a label'
		const content = 'This is the content'
		render(<Tooltip label={label} content={content} />)
		expect(screen.getByText(label)).toBeInTheDocument()
		expect(screen.getByText(content)).toBeInTheDocument()
	})
	it('should apply the styles to the label and content when specified', () => {
		const labelStyle = 'blue-text'
		const contentStyle = 'red-background'
		render(
			<Tooltip
				label="Label"
				content="Content"
				labelStyle={labelStyle}
				contentStyle={contentStyle}
			/>
		)
		expect(screen.getByText('Label')).toHaveClass(labelStyle)
		expect(screen.getByText('Content')).toHaveClass(contentStyle)
	})
	it('should show the tooltip content when hovered over', () => {
		render(<Tooltip label="Label" content="Content" />)
		expect(screen.queryByText('Content')).not.toHaveClass('active')

		fireEvent.mouseEnter(screen.getByTestId('tooltip'))
		expect(screen.getByText('Content')).toHaveClass('active')

		fireEvent.mouseLeave(screen.getByTestId('tooltip'))
		expect(screen.queryByText('Content')).not.toHaveClass('active')
	})
})
