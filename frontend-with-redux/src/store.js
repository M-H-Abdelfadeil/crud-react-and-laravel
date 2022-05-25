import { configureStore } from "@reduxjs/toolkit";
import  postsCreateSlice  from "./requests/posts/requestPostsCreate";
import  postsEditSlice  from "./requests/posts/requestPostsEdit";
import  postsIndexSlice  from "./requests/posts/requestPostsIndex";
import  postsShowSlice  from "./requests/posts/requestPostsShow";

const store = configureStore({
    reducer:{
        postsCreate:postsCreateSlice,
        postsIndex:postsIndexSlice,
        postsShow :postsShowSlice,
        postsEdit:postsEditSlice
    }
})

export default store;