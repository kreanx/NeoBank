import clsx from 'clsx'
import ITabsButton from './types'

const TabsButton: React.FC<ITabsButton> = ({
	style,
	activeStyle,
	id,
	isActive,
	label,
	activeHandler,
}) => {
	return (
		<div
			onClick={() => activeHandler(id)}
			className={clsx(style, {
				[activeStyle]: isActive === id,
			})}
		>
			{label}
		</div>
	)
}

export default TabsButton
