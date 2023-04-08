import styles from './Divider.module.scss'
import clsx from 'clsx'
interface IDivider {
	classes?: string
}

const Divider: React.FC<IDivider> = ({ classes }) => {
	return <div className={clsx(styles.divider, classes)}></div>
}

export default Divider
