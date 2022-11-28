import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import rgbReducer from '../features/rgb/rgbSlice'

export const store = configureStore({
  reducer: {
    rgb: rgbReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
