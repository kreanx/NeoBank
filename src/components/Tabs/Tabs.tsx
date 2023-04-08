import styles from './Tabs.module.scss'
import Container from 'ui-kit/Container/Container'
import TabsButton from 'ui-kit/TabsButton/TabsButtons'
import { useState } from 'react'
import AboutCard from 'components/AboutCard/AboutCard'
import Rates from 'components/Rates/Rates'
import Cashback from 'components/Cashback/Cashback'
import FAQ from 'components/FAQ/FAQ'

const Tabs: React.FC = () => {
	const [isActive, setActive] = useState<string>('0')

	const activeHandler = (id: string) => {
		setActive(id)
	}

	const elements = [
		{
			label: 'About card',
			element: <AboutCard />,
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
