import { AccordionItem } from 'ui-kit/Accordion/AccoridonItem/AccordionItem'
import { useState } from 'react'
import { IAccordionContainerProps } from './types'

const Accordion: React.FC<IAccordionContainerProps> = ({
	accordionItems,
	initialValue = -1,
}) => {
	const [isOpenFirst, setOpen] = useState<number>(initialValue)

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

export { Accordion }
