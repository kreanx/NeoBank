import { useState } from 'react'
import clsx from 'clsx'
import { ITableHeader } from './types'
import ArrowTable from 'img/tsIcons/ArrowTable'

const TableHeaderItem: React.FC<ITableHeader> = ({
	sortingHandler,
	styles,
	item,
	id,
}) => {
	const [isClicked, setIsClicked] = useState<boolean>(false)

	const clickHandler = () => {
		setIsClicked((prev) => !prev)
	}

	const wordFixHandler = (word: string) => {
		return word
			.split(/(?!^)(?=[A-Z])/)
			.map((item) => item.toUpperCase())
			.join(' ')
	}

	return (
		<th
			className={styles.table__th}
			onClick={() => {
				sortingHandler(id)
				clickHandler()
			}}
		>
			{wordFixHandler(item)}
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
