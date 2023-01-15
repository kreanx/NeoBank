import styles from './Container.module.scss'
import { IContainer } from './types'

const Container: React.FC<IContainer> = ({ children }) => {
	return <div className={styles.container}>{children}</div>
}

export default Container
