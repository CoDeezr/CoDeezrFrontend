import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Artist } from '../../model/artist'
import { APIResponse } from '../../model/api-response'
import { Track } from '../../model/track'
import { Album } from '../../model/album'
import { API_BASE_URL } from '../../constants/urls'

const artistApi = createApi({
  reducerPath: 'artistApi',
  tagTypes: ['artist', 'toptracks'],
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getArtist: builder.query<Artist, number>({
      query: (id) => `/artist/${id}`,
      providesTags: ['artist'],
    }),
    getTopTracks: builder.query<APIResponse<Track[]>, number>({
      query: (id) => `/artist/${id}/top`,
      providesTags: ['toptracks'],
    }),
    getAlbums: builder.query<APIResponse<Album[]>, number>({
      query: (id) => `/artist/${id}/albums`,
      providesTags: ['toptracks'],
    }),
  })
})

export const {
  useGetArtistQuery,
  useGetTopTracksQuery,
  useGetAlbumsQuery,
} = artistApi

export default artistApi
