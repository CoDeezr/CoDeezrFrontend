import { configureStore } from '@reduxjs/toolkit'
import trackApi from './track/track.api'
import artistApi from './artist/artist.api'

const store = configureStore({
  reducer: {
    [trackApi.reducerPath]: trackApi.reducer,
    [artistApi.reducerPath]: artistApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat([
    trackApi.middleware,
    artistApi.middleware,
  ])
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
