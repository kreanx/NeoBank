import styles from './FAQ.module.scss'
import { AccordionContainer } from 'ui-kit/AccordionContainer/AccordionContainer'
import { faqCard, faqCredit } from 'mocks/faq'

const FAQ: React.FC = () => {
	return (
		<div className={styles.faq}>
			<div className={styles.faq__block}>
				<h2 className={styles.faq__title}>Issuing and receiving a card</h2>
				<AccordionContainer initialValue={0} accordionItems={faqCard} />
			</div>
			<div className={styles.faq__block}>
				<h2 className={styles.faq__title}>Using a credit card</h2>
				<AccordionContainer accordionItems={faqCredit} />
			</div>
		</div>
	)
}

export default FAQ
