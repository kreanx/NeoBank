import { MutableRefObject } from 'react'

export interface ISliderArrow {
	customStyle: string
	scrollHandler: (
		element: MutableRefObject<HTMLInputElement>,
		amount: number,
		direction: string
	) => void
	element: MutableRefObject<HTMLInputElement>
	refer: MutableRefObject<HTMLInputElement>
	disabled: boolean
	direction: string
	amount: number
}

const SliderArrow: React.FC<ISliderArrow> = ({
	customStyle,
	scrollHandler,
	element,
	refer,
	disabled,
	direction,
	amount,
}) => {
	return (
		<button
			data-testid="slider-arrow"
			className={customStyle}
			onClick={() => scrollHandler(element, amount, direction)}
			ref={refer}
			disabled={disabled}
		>
			<svg
				width="25"
				height="26"
				viewBox="0 0 25 26"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M0 9H15.1579V1.60858C15.1579 1.41552 15.4044 1.33452 15.5189 1.48994L24 13L15.5189 24.5101C15.4044 24.6655 15.1579 24.5845 15.1579 24.3914V17H0"
					stroke="white"
				/>
			</svg>
		</button>
	)
}

export default SliderArrow
