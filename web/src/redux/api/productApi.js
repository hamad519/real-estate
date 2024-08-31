import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/',
    }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: (data) => `products/all?search=${data.search}&sort=${data.sort}&category=${data.category}&minPrice=${data.minPrice}&maxPrice=${data.maxPrice}&page=${data.page}&limit=${data.limit}`,
            
        }),
    })
})

export const {  useGetAllProductsQuery } = productApi