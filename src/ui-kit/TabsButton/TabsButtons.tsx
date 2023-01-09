import clsx from 'clsx'
import TTabsButton from './types'
const TabsButton: React.FC<TTabsButton> = ({
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
