import { render } from '@testing-library/react'
import Loader from './Loader'
import '@testing-library/jest-dom/extend-expect'

describe('Loader', () => {
	it('renders without crashing', () => {
		const { getByTestId } = render(<Loader />)
		expect(getByTestId('loader')).toBeInTheDocument()
	})
	it('should have the loader class', () => {
		const { getByTestId } = render(<Loader />)
		expect(getByTestId('loader')).toHaveClass('loader')
	})
	it('should have the fullsize class when fullsize is set to true', () => {
		const { getByTestId } = render(<Loader fullsize={true} />)
		expect(getByTestId('loader')).toHaveClass('loader__fullsize')
	})
	it('should not have the fullsize class when fullsize is set to false', () => {
		const { getByTestId } = render(<Loader fullsize={false} />)
		expect(getByTestId('loader')).not.toHaveClass('loader__fullsize')
	})
})
