import styles from './StepComplete.module.scss'
import Container from 'ui-kit/Container/Container'
import { IStepComplete } from './types'

const StepComplete: React.FC<IStepComplete> = ({ title, subtitle }) => {
	return (
		<div className={styles.stepComplete}>
			<Container>
				<div className={styles.stepComplete__wrapper}>
					<h2 className={styles.stepComplete__title}>{title}</h2>
					<h3 className={styles.stepComplete__subtitle}>{subtitle}</h3>
				</div>
			</Container>
		</div>
	)
}

export default StepComplete
