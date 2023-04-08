import { render } from '@testing-library/react'
import News from './News'
import '@testing-library/jest-dom/extend-expect'

describe('News component', () => {
	it('renders the news title and subtitle', () => {
		const { getByText } = render(<News />)

		const title = getByText('Current news from the world of finance')
		const subtitle = getByText(
			'We update the news feed every 15 minutes. You can learn more by clicking on the news you are interested in.'
		)

		expect(title).toBeInTheDocument()
		expect(subtitle).toBeInTheDocument()
	})
})
