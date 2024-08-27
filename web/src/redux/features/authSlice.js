import { createSlice, current } from '@reduxjs/toolkit'


const {actions, reducer} = createSlice({
    name:'auth',
    initialState:{
        user:null,
        isAuthenticated:false
    },
    reducers:{
        setUserInfo:(state, action)=>{
            state.user = action.payload.user
            state.isAuthenticated = action.payload.isAuthenticated
        },
        clearUserInfo:(state, action)=>{
            state.user = action.payload.user
            state.isAuthenticated = action.payload.isAuthenticated
        }
    }
})


export const  {setUserInfo, clearUserInfo} = actions
export default reducer


