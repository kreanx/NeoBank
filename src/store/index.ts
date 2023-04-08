import { configureStore, combineReducers } from '@reduxjs/toolkit'
import mainStepReducer from './slices/mainStepSlice'
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
