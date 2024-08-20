import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const authApi = createApi({
    reducerPath:'authApi',
    baseQuery:fetchBaseQuery({ 
        baseUrl: 'http://localhost:8000/',
        credentials:'include'
    }),
    endpoints:(builder)=>({
        loginUser:builder.mutation({
            query:(data) => ({
                url: `auth/login`,
                method: 'POST',
                body: data,
              })
        }),
        registerUser:builder.mutation({
            query:(data)=> ({
                url: `auth/register`,
                method: 'POST',
                body: data,
            })
        }),
        getMe:builder.query({
            query:()=> 'me'
        }),
        logout:builder.mutation({
            query:()=> ({
                url: `auth/logout`,
                method: 'POST'
            })
        }),
    })
})

export const {useLoginUserMutation, useRegisterUserMutation, useGetMeQuery, useLogoutMutation} = authApi