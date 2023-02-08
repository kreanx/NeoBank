import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import store from 'store'
import StepComplete from './StepComplete'
import '@testing-library/jest-dom/extend-expect'

describe('StepComplete', () => {
	test('renders title and subtitle', () => {
		const title = 'Step Complete'
		const subtitle = 'The step is now complete.'
		render(
			<MemoryRouter>
				<Provider store={store}>
					<StepComplete title={title} subtitle={subtitle} />
				</Provider>
			</MemoryRouter>
		)

		expect(screen.getByText(title)).toBeInTheDocument()
		expect(screen.getByText(subtitle)).toBeInTheDocument()
	})
})
