import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Container from './Container'

describe('Container', () => {
	it('should render the children inside the container', () => {
		const { getByTestId } = render(<Container>test</Container>)
		expect(getByTestId('container')).toHaveClass('container')
	})
})
