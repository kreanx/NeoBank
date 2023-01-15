import styles from './Loader.module.scss'
import ILoader from './types'
import clsx from 'clsx'

const Loader: React.FC<ILoader> = ({ fullsize }) => {
	return (
		<div
			className={clsx(styles.loader, {
				[styles.loader__fullsize]: fullsize === true,
			})}
		></div>
	)
}

export default Loader
