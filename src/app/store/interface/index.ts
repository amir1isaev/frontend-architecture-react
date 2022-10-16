import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppState } from '..'
import { RootState, initialState } from './initial'

const reducers = {
	setLoading: (state: RootState, action: PayloadAction<boolean>) => {
		state.isLoading = action.payload
	},
}

const interfaceSlice = createSlice({
	name: 'interface',
	initialState,
	reducers,
})

export const getIsLoading = (state: AppState) => state.interface.isLoading

export const interfaceReducer = interfaceSlice.reducer
export const interfaceActions = interfaceSlice.actions
