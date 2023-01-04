import styles from './Container.module.scss'
import { TContainer } from './types'

const Container: React.FC<TContainer> = ({ children }) => {
	return <div className={styles.container}>{children}</div>
}

export default Container
