import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/',
    }),
    endpoints: (builder) => ({
        getAllCategories: builder.query({
            query: () => `categories`,
        }),
    })
})

export const {  useGetAllCategoriesQuery } = categoryApi