import clsx from 'clsx'
interface ITabsButton {
	style?: string
	activeStyle: string
	id: string
	isActive: string
	label: string
	activeHandler: (id: string) => void
}

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
