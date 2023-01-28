import { configureStore, combineReducers } from '@reduxjs/toolkit'
import mainStepReducer from './slices/mainStepSlice'
import additionalStepReducer from './slices/additionalStepSlice'
import storage from 'redux-persist/lib/storage'
import {
	persistReducer,
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
const persistConfig = {
	key: 'root',
	storage,
}
const rootReducer = combineReducers({
	mainStepReducer: mainStepReducer,
	additionalStepReducer: additionalStepReducer,
})

const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer)

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export default store

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
