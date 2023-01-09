import { AccordionItem } from 'ui-kit/AccoridonItem/AccordionItem'
import { useState } from 'react'
import { TAccordionContainerProps } from './types'

const AccordionContainer: React.FC<TAccordionContainerProps> = ({
	accordionItems,
	initialValue = -1,
}) => {
	const [isOpenFirst, setOpen] = useState(initialValue)

	const openHandler = (id: number) => {
		if (isOpenFirst === id) {
			return setOpen(-1)
		}

		setOpen(id)
	}

	return (
		<div>
			{accordionItems.map((item, i) => {
				return (
					<AccordionItem
						key={i}
						title={item.title}
						content={item.content}
						openHandler={openHandler}
						index={i}
						isOpen={isOpenFirst === i}
					/>
				)
			})}
		</div>
	)
}

export { AccordionContainer }
