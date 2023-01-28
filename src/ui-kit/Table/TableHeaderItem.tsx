import { useState } from 'react'
import clsx from 'clsx'
import { ITableHeader } from './types'
import ArrowTable from 'img/tsIcons/ArrowTable'

const TableHeaderItem: React.FC<ITableHeader> = ({
	sortingHandler,
	styles,
	item,
}) => {
	const [isClicked, setIsClicked] = useState<boolean>(false)

	const clickHandler = () => {
		setIsClicked((prev) => !prev)
	}

	return (
		<th
			className={styles.table__th}
			onClick={() => {
				sortingHandler(item.id)
				clickHandler()
			}}
		>
			{item.value}
			<div
				className={clsx(styles.table__arrow, {
					[styles.table__arrow_desc]: isClicked,
				})}
			>
				<ArrowTable />
			</div>
		</th>
	)
}

export default TableHeaderItem
