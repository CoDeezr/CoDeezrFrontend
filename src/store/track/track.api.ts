import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { APIResponse } from '../../model/api-response'
import { Track } from '../../model/track'

const trackApi = createApi({
  reducerPath: 'trackApi',
  tagTypes: ['tracks'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:3000' }),
  endpoints: (builder) => ({
    getTracks: builder.query<APIResponse<Track[]>, { search: string, index: number }>({
      query: ({ search, index }) => `/search?q=${search}&index=${index}`,
      providesTags: ['tracks'],
    }),
  })
})

export const {
  useGetTracksQuery,
} = trackApi

export default trackApi
