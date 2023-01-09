import styles from './Divider.module.scss'
import TDivider from './type'
import clsx from 'clsx'

const Divider: React.FC<TDivider> = ({ classes }) => {
	return <div className={clsx(styles.divider, classes)}></div>
}

export default Divider
