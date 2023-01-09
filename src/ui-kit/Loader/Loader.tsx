import styles from './Loader.module.scss'
import TLoader from './types'
import clsx from 'clsx'

const Loader: React.FC<TLoader> = ({ fullsize }) => {
	return (
		<div
			className={clsx(styles.loader, {
				[styles.loader__fullsize]: fullsize === true,
			})}
		></div>
	)
}

export default Loader
