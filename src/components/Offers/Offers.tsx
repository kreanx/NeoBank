import Container from 'ui-kit/Container/Container'
import styles from './Offers.module.scss'
import OfferItem from './OfferItem/OfferItem'
import { applyOffer } from 'services/api/api'
import { useState, useEffect } from 'react'
import Loader from 'ui-kit/Loader/Loader'
import localStorageHandler from '../../services/localStorage/localStorageHandler'

const Offers: React.FC = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [data, setData] = useState<any>()
	useEffect(() => {
		setData(JSON.parse(localStorageHandler('offers', 'get')))
	}, [])

	return (
		<div className={styles.offers} id="scroll">
			<Container>
				<div className={styles.offers__wrapper}>
					{isLoading ? <Loader fullsize={true} /> : <></>}
					{data?.map((item, i) => {
						return (
							<OfferItem
								key={i}
								totalAmount={item.totalAmount}
								requestedAmount={item.requestedAmount}
								time="For 24 months"
								monthlyPayment={item.monthlyPayment}
								rate={item.rate}
								isInsuranceEnabled={item.isInsuranceEnabled}
								isSalaryClient={item.isSalaryClient}
								applicationId={item.applicationId}
								applyOffer={applyOffer}
								setIsLoading={setIsLoading}
							/>
						)
					})}
				</div>
			</Container>
		</div>
	)
}

export default Offers
