import styles from './FAQ.module.scss'
import { Accordion } from 'ui-kit/Accordion/Accordion'
import { faqCard, faqCredit } from './Content'

const FAQ: React.FC = () => {
	return (
		<div className={styles.faq}>
			<div className={styles.faq__block}>
				<h2 className={styles.faq__title}>Issuing and receiving a card</h2>
				<Accordion initialValue={0} accordionItems={faqCard} />
			</div>
			<div className={styles.faq__block}>
				<h2 className={styles.faq__title}>Using a credit card</h2>
				<Accordion accordionItems={faqCredit} />
			</div>
		</div>
	)
}

export default FAQ
