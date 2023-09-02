import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { APIResponse } from '../../model/api-response'
import { Track } from '../../model/track'
import { API_BASE_URL } from '../../constants/urls'

const trackApi = createApi({
  reducerPath: 'trackApi',
  tagTypes: ['tracks'],
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
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
