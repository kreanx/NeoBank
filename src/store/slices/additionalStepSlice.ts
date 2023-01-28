import { createSlice } from '@reduxjs/toolkit'

type TStep = {
	current: number
}

const initialState: TStep = {
	current: 0,
}

const additionalStepSlice = createSlice({
	name: 'additionalStep',
	initialState,
	reducers: {
		additionalNextStep(state) {
			state.current = state.current + 1
		},
		additionalPrevStep(state) {
			state.current = state.current - 1
		},
		additionalDefaultStep(state) {
			state.current = 0
		},
	},
})

export const { additionalNextStep, additionalPrevStep, additionalDefaultStep } =
	additionalStepSlice.actions

export default additionalStepSlice.reducer
