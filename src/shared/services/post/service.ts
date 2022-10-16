import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { API_URL } from 'shared/config'
import { Post } from './types'

const baseQuery = fetchBaseQuery({
	baseUrl: API_URL,
})

export const postAPI = createApi({
	reducerPath: 'post-api',
	tagTypes: ['Post'],
	baseQuery,
	endpoints: (build) => ({
		getPosts: build.query<Post[], {}>({
			query: (params) => ({
				url: '/posts',
				params,
			}),
		}),
	}),
})
export const { useGetPostsQuery } = postAPI
