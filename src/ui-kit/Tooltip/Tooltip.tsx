import styles from './Tooltip.module.scss'
import TTooltip from './types'
import { useState } from 'react'
import clsx from 'clsx'

const Tooltip: React.FC<TTooltip> = ({
	label,
	content,
	contentStyle,
	labelStyle,
}) => {
	const [active, setActive] = useState(false)

	return (
		<div
			className={styles.tooltip}
			onMouseEnter={() => setActive(true)}
			onMouseLeave={() => setActive(false)}
		>
			<div className={clsx(styles.tooltip__label, labelStyle)}>
				{label}
				<div
					className={clsx(styles.tooltip__label_content, contentStyle, {
						[styles.active]: active,
					})}
				>
					{content}
				</div>
			</div>
		</div>
	)
}

export default Tooltip