import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MUSIC_GENRES } from '../../constants/music-genres'

function getPseudoRandomMusicGenre(): string {
  const index = Math.floor(Math.random() * MUSIC_GENRES.length)
  return MUSIC_GENRES[index]
}

const initialState = {
  term: getPseudoRandomMusicGenre(),
  page: 1,
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<{term: string, page: number}>) => {
      state.term = action.payload.term
      state.page = action.payload.page
    },
  },
})

export const {
  setSearch,
} = searchSlice.actions

export default searchSlice
