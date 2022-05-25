import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
let requestErrors=null;
let requestData=null;


export const requestPostsEdit = createAsyncThunk("posts/edit",async(post,postId)=>{
    //console.log(post)
    await axios.post(`${process.env.REACT_APP_URL_API}/posts/update/2`,post)
    .then(({data})=>{
        requestData= data
      
    })
    .catch(({response})=>{
        requestErrors = response

    })
    
    
})



export const postsEditSlice  =  createSlice({
    name:'PostsEdit',
    initialState:{
      
        errorsValidate:{
            errorTitle:'',
            errorDescription:'',
            errorImage:''
        }
        
    },
    reducers:{
        
    },
    extraReducers:{
       
        [requestPostsEdit.fulfilled]:(state,action)=>{
            
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
export default postsEditSlice.reducer;