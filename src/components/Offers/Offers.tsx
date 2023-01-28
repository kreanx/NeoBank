import Container from 'ui-kit/Container/Container'
import styles from './Offers.module.scss'
import offersContent from './Content'
import OfferItem from './OfferItem/OfferItem'
import applyOffer from 'services/api/applyOffer'
import { useState } from 'react'
import Loader from 'ui-kit/Loader/Loader'

const Offers: React.FC = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false)

	return (
		<div className={styles.offers} id="scroll">
			<Container>
				<div className={styles.offers__wrapper}>
					{isLoading ? <Loader fullsize={true} /> : <></>}
					{offersContent.map((item, i) => {
						return (
							<OfferItem
								key={i}
								total={item.total}
								requested={item.requested}
								time={item.time}
								monthly={item.monthly}
								rate={item.rate}
								isInsurance={item.isInsurance}
								isSalary={item.isSalary}
								id={item.id}
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
