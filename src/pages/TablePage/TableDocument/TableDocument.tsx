import { useState } from 'react'
import { tableDocumentContent, tableDocumentHeaders } from '../Content'
import Table from 'ui-kit/Table/Table'

const TableDocument: React.FC = () => {
	const [content, setContent] = useState(tableDocumentContent)
	const [order, setOrder] = useState<'ASC' | 'DESC'>('ASC')

	const sortingHandler = (col: string) => {
		if (order === 'ASC') {
			const sorted = [...content].sort((a, b) => (+a[col] > +b[col] ? 1 : -1))
			setContent(sorted)
			setOrder('DESC')
		}
		if (order === 'DESC') {
			const sorted = [...content].sort((a, b) => (+a[col] < +b[col] ? 1 : -1))
			setContent(sorted)
			setOrder('ASC')
		}
	}

	return (
		<Table
			content={content}
			headers={tableDocumentHeaders}
			sortingHandler={sortingHandler}
		/>
	)
}

export default TableDocument
