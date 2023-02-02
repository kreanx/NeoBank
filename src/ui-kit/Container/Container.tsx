import styles from './Container.module.scss'
export interface IContainer {
	children: React.ReactNode
}

const Container: React.FC<IContainer> = ({ children }) => {
	return <div className={styles.container}>{children}</div>
}

export default Container
