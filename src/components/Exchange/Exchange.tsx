import Container from '../Container/Container'
import styles from './Exchange.module.scss'
import townhall from '../../img/home/townhall.png'
import { useState, useEffect } from 'react'
import ExchangeItem from '../ExchangeItem/ExchangeItem'
import { TItemProps } from './types'

const Exchange: React.FC = () => {
	const currencyList: string[] = ['USD', 'EUR', 'SGD', 'JPY', 'CNH', 'HKD']
	const toCurrency = 'RUB'

	const [currency, setCurrency] = useState([])

	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '141fc98f46msh353d93f5a1e571bp195a88jsn81da51edfbf5',
				'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com',
			},
		}

		currencyList.forEach((currencyName) => {
			fetch(
				`https://currency-exchange.p.rapidapi.com/exchange?from=${currencyName}&to=${toCurrency}&q=1.0`,
				options
			)
				.then((response) => response.json())
				.then((response) => {
					const newObj = {
						currencyName: currencyName,
						currencyAmount: response.toFixed(2),
					}
					setCurrency((prev) => [...prev, newObj])
				})
				.catch((error) => console.error(error))
		})
	}, [])

	return (
		<section className={styles.exchange}>
			<Container>
				<div className={styles.exchange__wrapper}>
					<div className={styles.exchange__block}>
						<h2 className={styles.exchange__title}>
							Exchange rate in&nbsp;internet bank
						</h2>
						<h3 className={styles.exchange__subtitle}>Currency</h3>
						<div className={styles.exchange__currency}>
							{currency.map((item: TItemProps, i) => {
								return (
									<ExchangeItem
										key={i}
										currencyAmount={item.currencyAmount}
										currencyName={item.currencyName}
									/>
								)
							})}
						</div>
						<a href="/" className={styles.exchange__link}>
							All courses
						</a>
					</div>
					<div className={styles.exchange__block}>
						<div className={styles.exchange__update}>
							Update every 15&nbsp;minutes, MSC 09.08.2022
						</div>
						<img
							className={styles.exchange__img}
							src={townhall}
							alt="townhall"
						/>
					</div>
				</div>
			</Container>
		</section>
	)
}

export default Exchange
