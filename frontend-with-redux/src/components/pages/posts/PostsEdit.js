import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {requestPostsEdit} from '../../../requests/posts/requestPostsEdit'
import {requestPostsShow} from '../../../requests/posts/requestPostsShow'
import DefaultInput from '../../helper/DefaultInput'
import DefaultTextArea from '../../helper/DefaultTextArea'

function PostsEdit() {

    const {errorsValidate}=useSelector(status=>status.postsEdit);

    console.log(errorsValidate)
    const[title , setTitle]=useState(''); 
    const[description , setDescription]=useState(''); 
    const[image , setImage]=useState(''); 

    const  {errorMsg , post}= useSelector(state=>state.postsShow)
    const dispatch = useDispatch() 
    const {id} = useParams()
    
    useEffect(()=>{
      dispatch(requestPostsShow(id))
      
    },[])
    
    
    const handleFile=(e)=>{
        setImage(e.target.files[0]);
    }
    if(post){
        console.log(post)
       
    }
      const handleSubmit =(e)=>{
        e.preventDefault()
        const postUpdate = new FormData();
        postUpdate.append('title',title ? title : post.title);
        postUpdate.append('description', description ? description : post.description);
        postUpdate.append('_method','PATCH');
        if(image){
            postUpdate.append('image',image);
        }
       
        
    
        

        dispatch(requestPostsEdit(postUpdate,id))
        dispatch(requestPostsShow(id))

        
        
      }
  return (
     
    <div>
        { post ? (
            <div className='formpost'>
                <form onSubmit={handleSubmit} id="formPost">
                    <DefaultInput  setValue={(e)=>{setTitle(e.target.value)}} type="text" value={post.title}   name="title" lable="Title"  error={errorsValidate.errorTitle}/>
                    <DefaultTextArea  setValue={(e)=>{setDescription(e.target.value)}}  value={post.description}  name="description" lable="Description"  error={errorsValidate.errorDescription}/>
                    <DefaultInput type="file" setValue={handleFile} name="image" lable="Image"  error={errorsValidate.errorImage}/>
                    <input type="submit" value="Submit" />
                </form>

            </div>
        ) : errorMsg}
    </div>
  )
}

export default PostsEdit
