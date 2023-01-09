import styles from './Tabs.module.scss'
import Container from 'components/Container/Container'
import TabsButton from 'ui-kit/TabsButton/TabsButtons'
import { useState } from 'react'
import About from '../About/About'
import FAQ from 'components/FAQ/FAQ'
import Cashback from '../Cashback/Cashback'
import Rates from '../Rates/Ratex'

const Tabs: React.FC = () => {
	const [isActive, setActive] = useState('0')

	const activeHandler = (id: string) => {
		setActive(id)
	}

	const elements = [
		{
			label: 'About card',
			element: <About />,
		},
		{
			label: 'Rates and conditions',
			element: <Rates />,
		},
		{
			label: 'Cashback',
			element: <Cashback />,
		},
		{
			label: 'FAQ',
			element: <FAQ />,
		},
	]

	return (
		<div className={styles.tabs}>
			<Container>
				<div className={styles.tabs__links}>
					{elements.map((item, i) => {
						return (
							<TabsButton
								activeStyle={styles.active}
								id={i.toString()}
								key={Math.random()}
								isActive={isActive}
								label={item.label}
								style={styles.tabs__link}
								activeHandler={activeHandler}
							/>
						)
					})}
				</div>
				{elements.map((item, i) => {
					if (i.toString() === isActive) {
						return <div key={Math.random()}>{item.element}</div>
					}
				})}
			</Container>
		</div>
	)
}

export default Tabs
