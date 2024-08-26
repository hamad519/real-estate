import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { clearUserInfo, setUserInfo } from '../features/authSlice';



export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/',
        credentials: 'include'
    }),
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (data) => ({
                url: `auth/login`,
                method: 'POST',
                body: data,
            })
        }),
        registerUser: builder.mutation({
            query: (data) => ({
                url: `auth/register`,
                method: 'POST',
                body: data,
            })
        }),
        getMe: builder.query({
            query: () => 'me',
            async onQueryStarted(arg, {dispatch,queryFulfilled}) {
                try {
                    const { data } = await queryFulfilled;
                    console.log('data', data);
                    if(!data){
                        dispatch(clearUserInfo());
                    }
                    dispatch(setUserInfo(data));
                } catch (err) {
                    dispatch(clearUserInfo())
                }
            }
        }),
        logout: builder.query({
            query: () => `auth/logout`,
            async onQueryStarted(arg, {dispatch,queryFulfilled}) {
                try {
                    dispatch(clearUserInfo());
                } catch (err) {
                    dispatch(clearUserInfo())
                }
            }
        }),
    })
})

export const { useLoginUserMutation, useRegisterUserMutation, useGetMeQuery, useLazyLogoutQuery } = authApi