import styles from './AccordionItem.module.scss'
import TAccordionItem from './types'
import AccordionArrow from 'img/tsIcons/AccordionArrow'
import clsx from 'clsx'

const AccordionItem: React.FC<TAccordionItem> = ({
	content,
	title,
	isOpen,
	openHandler,
	index,
}) => {
	return (
		<div
			data-testid="accordion-item"
			className={styles.accordion}
			onClick={() => openHandler(index)}
		>
			<div className={styles.accordion__text}>
				<h2 className={styles.accordion__title}>{title}</h2>
				<div
					className={clsx(styles.accordion__icon, {
						[styles.accordion__icon_active]: isOpen,
					})}
				>
					<AccordionArrow />
				</div>
			</div>
			<div
				data-testid="accordion-content"
				className={clsx(styles.accordion__content, {
					[styles.accordion__content_active]: isOpen,
				})}
			>
				{content}
			</div>
		</div>
	)
}

export { AccordionItem }
