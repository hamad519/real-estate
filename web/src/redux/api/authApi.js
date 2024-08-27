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
            }),
            async onQueryStarted(arg, {dispatch,queryFulfilled}) {
                
                try {
                    await queryFulfilled;
                    console.log("-------------------------");
                    console.log("onQueryStarted inside LoginUser");
                    console.log("-------------------------");
                    dispatch(authApi.endpoints.getMe.initiate(null));
                    // dispatch(setUserInfo({isAuthenticated:true}));
                } catch (err) {
                    dispatch(clearUserInfo())
                }
            }
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
                    if(data.success === false){
                        dispatch(clearUserInfo({
                            user: null,
                            isAuthenticated: false
                        }))
                        return
                    }
                    dispatch(setUserInfo({
                        user: data,
                        isAuthenticated: true
                    }));
                    
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