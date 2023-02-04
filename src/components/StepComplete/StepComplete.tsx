import styles from './StepComplete.module.scss'
import Container from 'ui-kit/Container/Container'
import { useEffect } from 'react'
import { getApplicationStatus } from 'services/api/api'
import { mainDefaultStep } from 'store/slices/mainStepSlice'
import localStorageHandler from 'services/localStorage/localStorageHandler'
import { useParams, useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'hook'
import { routes } from 'services/routes'

interface IStepComplete {
	title: string
	subtitle: string
	isCheck?: boolean
}

const StepComplete: React.FC<IStepComplete> = ({
	title,
	subtitle,
	isCheck,
}) => {
	const applicationId = useParams()
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	useEffect(() => {
		if (isCheck) {
			setTimeout(async () => {
				const status = await getApplicationStatus(applicationId.applicationId)
				if (status?.status === 'CC_DENIED') {
					dispatch(mainDefaultStep())
					localStorageHandler('application', 'remove')
					navigate(routes.home)
				}
			}, 10000)
		}
	}, [])

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
