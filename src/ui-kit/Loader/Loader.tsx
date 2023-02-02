import styles from './Loader.module.scss'
import clsx from 'clsx'
interface ILoader {
	fullsize?: boolean
}

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
