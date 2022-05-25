import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
let requestErrors=null;
let requestData=null;
export const requestPostsCreate = createAsyncThunk("posts/create",async(post)=>{
    //console.log(post)
    await axios.post(`${process.env.REACT_APP_URL_API}/posts/create`,post)
    .then(({data})=>{
        requestData= data
        document.getElementById("formPost").reset();
    })
    .catch(({response})=>{
        requestErrors = response
    })
    
    
})



export const postsCreateSlice  =  createSlice({
    name:'PostsCreate',
    initialState:{
        loading:false,
        errorsValidate:{
            errorTitle:'',
            errorDescription:'',
            errorImage:''
        }
        
    },
    reducers:{
        
    },
    extraReducers:{
        [requestPostsCreate.pending]:(state)=>{
            //console.log("pending")
            state.loading=true
        },
        [requestPostsCreate.fulfilled]:(state,action)=>{
            state.loading=false
            //console.log("fulfilled",action)
            const stateValidate = state.errorsValidate;
            stateValidate.errorTitle=''
            stateValidate.errorDescription=''
            stateValidate.errorImage=''
            if(requestData){
                toast.success(requestData.message)
                requestData=null
            }else{
                //console.log(requestErrors)
                if(requestErrors.status === 422){
                    toast.error(requestErrors.message)
                    const errorsValidate =requestErrors.data.errors
                    
                    if(errorsValidate.title)stateValidate.errorTitle=errorsValidate.title[0]
                    if(errorsValidate.description)stateValidate.errorDescription=errorsValidate.description[0]
                    if(errorsValidate.image)stateValidate.errorImage=errorsValidate.image[0]
                
                }
            }
           
        }
    }

})

// export const {} = userSlice.actions;
export default postsCreateSlice.reducer;