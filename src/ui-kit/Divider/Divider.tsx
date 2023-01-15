import styles from './Divider.module.scss'
import IDivider from './type'
import clsx from 'clsx'

const Divider: React.FC<IDivider> = ({ classes }) => {
	return <div className={clsx(styles.divider, classes)}></div>
}

export default Divider
