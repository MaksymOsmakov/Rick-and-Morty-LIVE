import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const charactersApi = createApi({
	reducerPath: "characters/api",
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://rickandmortyapi.com/api/'
	}),
	refetchOnFocus: true,
	refetchOnReconnect: true,
	endpoints: build => ({
		getAllCharacters: build.query({
			query: (page) => ({
				url: `character/?page=${page}`
			}),
			transformResponse: (response) => response
		}),
		searchByQuery: build.query({
			query: ({ page, name, status, gender }) => ({
				url: `character/?page=${page}&name=${name}&status=${status}&gender=${gender}`
			}),
			transformResponse: (response) => response
		})
	})
})


export const { useGetAllCharactersQuery, useLazyGetAllCharactersQuery, useLazySearchByQueryQuery } = charactersApi
