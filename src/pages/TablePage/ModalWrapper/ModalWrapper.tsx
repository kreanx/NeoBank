import Modal from 'ui-kit/Modal/Modal'

interface IContent {
	title: string
	text: string
	firstButton: string
	secondButton?: string
	firstButtonHandler?: () => void
	secondButtonHandler?: () => void
	closeHandler: () => void
}

interface IModalWrapper {
	isDeny: boolean
	isDenied: boolean
	content: IContent[]
}

const ModalWrapper: React.FC<IModalWrapper> = ({
	isDeny,
	isDenied,
	content,
}) => {
	return (
		<>
			{isDeny ? (
				<Modal
					title={'Deny application'}
					text={'You exactly sure, you want to cancel this application?'}
					firstButton={'Cancel'}
					secondButton={'Deny'}
					firstBtnHandler={content[0].firstButtonHandler}
					secondBtnHandler={content[0].secondButtonHandler}
					closeHandler={content[0].closeHandler}
				/>
			) : (
				<></>
			)}
			{isDenied ? (
				<Modal
					title={'Deny application'}
					text={'Your application has been deny!'}
					firstButton={'Go home'}
					firstBtnHandler={content[1].firstButtonHandler}
					closeHandler={content[1].closeHandler}
				/>
			) : (
				<></>
			)}
		</>
	)
}

export default ModalWrapper
