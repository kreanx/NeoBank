import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Table from './Table'

describe('Table Component', () => {
	const content = [
		{
			number: '1',
			date: '2020-01-01',
			total: '1',
			interest: '1',
			debt: '1',
			remaining: '1',
		},
		{
			number: '1',
			date: '2020-01-01',
			total: '1',
			interest: '1',
			debt: '1',
			remaining: '1',
		},
	]
	const headers = ['name', 'age']
	const sortingHandler = jest.fn()
	beforeEach(() => {
		render(
			<Table
				content={content}
				headers={headers}
				sortingHandler={sortingHandler}
			/>
		)
	})
	it('renders the table component', () => {
		expect(screen.getByTestId('table')).toBeInTheDocument()
	})
	it('renders two table rows', () => {
		expect(screen.getAllByTestId('row').length).toBe(2)
	})
})
