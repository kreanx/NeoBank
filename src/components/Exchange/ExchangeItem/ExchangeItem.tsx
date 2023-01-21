import style from './Exchange.module.scss'
import { IExchangeProps } from './types'

const ExchangeItem: React.FC<IExchangeProps> = ({
	currencyName,
	currencyAmount,
}) => {
	return (
		<div className={style.exchange__currency_block}>
			<div className={style.exchange__currency_text}>{currencyName}:&nbsp;</div>
			<div className={style.exchange__currency_amount}>{currencyAmount}</div>
		</div>
	)
}

export default ExchangeItem