import React, { useState, useEffect } from 'react'
import Table from 'ui-kit/Table/Table'
import { getApplicationStatus } from 'services/api/api'
import { useParams } from 'react-router-dom'

const TableDocument: React.FC = () => {
	const [content, setContent] = useState([])
	const [headers, setHeaders] = useState([])
	const [order, setOrder] = useState<'ASC' | 'DESC'>('ASC')
	const applicationId = useParams()

	useEffect(() => {
		async function getStatus() {
			const data = await getApplicationStatus(applicationId.applicationId)
			setContent(data?.credit.paymentSchedule)
			setHeaders(Object.keys(data?.credit.paymentSchedule[0]))
		}
		getStatus()
	}, [])

	const sortingHandler = (col: number) => {
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
			headers={headers}
			sortingHandler={sortingHandler}
		/>
	)
}

export default React.memo(TableDocument)
