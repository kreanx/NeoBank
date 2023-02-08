import { render, screen } from '@testing-library/react'
import Rates from './Rates'
import '@testing-library/jest-dom/extend-expect'
import ratesContent from './Content'

describe('Rates', () => {
	test('renders all content blocks', () => {
		render(<Rates />)
		const contentBlocks = screen.getAllByTestId('content-block')
		expect(contentBlocks).toHaveLength(6)
	})

	test('renders correct title and description for each content block', () => {
		render(<Rates />)
		const contentBlockTitles = screen.getAllByTestId('content-block-title')
		const contentBlockDescriptions = screen.getAllByTestId(
			'content-block-description'
		)
		expect(contentBlockTitles[0]).toHaveTextContent(ratesContent[0].title)
		expect(contentBlockDescriptions[0]).toHaveTextContent(ratesContent[0].text)
		expect(contentBlockTitles[1]).toHaveTextContent(ratesContent[1].title)
		expect(contentBlockDescriptions[1]).toHaveTextContent(ratesContent[1].text)
		expect(contentBlockTitles[2]).toHaveTextContent(ratesContent[2].title)
		expect(contentBlockDescriptions[2]).toHaveTextContent(ratesContent[2].text)
	})
})
