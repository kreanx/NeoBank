import styles from './Table.module.scss'
import TableHeaderItem from './TableHeaderItem'
import { ITable } from './types'

const Table: React.FC<ITable> = ({ content, headers, sortingHandler }) => {
	return (
		<div className={styles.table}>
			<table className={styles.table__table}>
				<thead className={styles.table__thead}>
					<tr className={styles.table__tr}>
						{headers.map((item, i) => {
							return (
								<TableHeaderItem
									key={i}
									item={item}
									sortingHandler={sortingHandler}
									styles={styles}
								/>
							)
						})}
					</tr>
				</thead>
				<tbody>
					{content.map((item, i) => {
						return (
							<tr className={styles.table__tr} key={i}>
								{Object.values(item).map((el, j) => {
									return (
										<td key={j} className={styles.table__td}>
											{el}
										</td>
									)
								})}
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}

export default Table
