import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { postAPI } from 'shared/services/post'
import { interfaceReducer } from './interface'

export const setupStore = () => {
	return configureStore({
		reducer: {
			interface: interfaceReducer,
			[postAPI.reducerPath]: postAPI.reducer,
		},
		middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), postAPI.middleware],
		devTools: process.env.NODE_ENV === 'development',
	})
}

export const store = setupStore()
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>
