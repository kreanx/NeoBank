import { createSlice } from '@reduxjs/toolkit'

type TStep = {
	current: number
}

const initialState: TStep = {
	current: 0,
}

const mainStepSlice = createSlice({
	name: 'mainStep',
	initialState,
	reducers: {
		mainNextStep(state) {
			state.current = state.current + 1
		},
		mainPrevStep(state) {
			state.current = state.current - 1
		},
		mainDefaultStep(state) {
			state.current = 0
		},
	},
})

export const { mainNextStep, mainPrevStep, mainDefaultStep } =
	mainStepSlice.actions

export default mainStepSlice.reducer
