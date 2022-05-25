import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
let post = null;
let errorMsg = null;
export const  requestPostsShow= createAsyncThunk("posts/show",async(postId)=>{
   await axios.get(`${process.env.REACT_APP_URL_API}/posts/show/${postId}`)
    .then(({data})=>{
        post=data.data
    }).catch(({response})=>{
        errorMsg = response.statusText;
    })
   
})

export const postsShowSlice=createSlice({
    name:'postsShow',
    initialState:{
        post,
        errorMsg:null
    },
    reducers:{

    },
    extraReducers:{
        [requestPostsShow.fulfilled]:(state)=>{
            state.post = post
            state.errorMsg = errorMsg
        }
    }
})

export default postsShowSlice.reducer

