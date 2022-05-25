import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
let posts = null;
export const  requestPostsIndex= createAsyncThunk("posts/index",async()=>{
   await axios.get(`${process.env.REACT_APP_URL_API}/posts`)
    .then(({data})=>{
        posts=data.data
    })
})

export const postsIndexSlice=createSlice({
    name:'postsIndex',
    initialState:{
        posts
    },
    reducers:{

    },
    extraReducers:{
        [requestPostsIndex.fulfilled]:(state)=>{
            state.posts = posts
        }
    }
})

export default postsIndexSlice.reducer

