import { configureStore } from '@reduxjs/toolkit'
import trackApi from './track/track.api'

const store = configureStore({
  reducer: {
    [trackApi.reducerPath]: trackApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat([
    trackApi.middleware,
  ])
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
