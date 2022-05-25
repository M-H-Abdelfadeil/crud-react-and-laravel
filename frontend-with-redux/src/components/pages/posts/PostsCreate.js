import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { requestPostsCreate } from '../../../requests/posts/requestPostsCreate';
import DefaultInput from '../../helper/DefaultInput';
import DefaultTextArea from '../../helper/DefaultTextArea';

const PostsCreate = () => {
  const dispatch = useDispatch();

  const {errorsValidate}=useSelector(status=>status.postsCreate);
  const[title , setTitle]=useState(''); 
  const[description , setDescription]=useState(''); 
  const[image , setImage]=useState(''); 

  const handleFile=(e)=>{
    setImage(e.target.files[0]);
  }

  const handleSubmit =(e)=>{
    e.preventDefault()
    const post = new FormData();
    post.append('title',title);
    post.append('description',description);
    post.append('image',image);
    
    dispatch(requestPostsCreate(post))
  }
  return (
    <div className='formpost'>
        <form onSubmit={handleSubmit} id="formPost">
            <DefaultInput type="text" setValue={(e)=>{setTitle(e.target.value)}} name="title" lable="Title"  error={errorsValidate.errorTitle}/>
            <DefaultTextArea setValue={(e)=>{setDescription(e.target.value)}} name="description" lable="Description"  error={errorsValidate.errorDescription}/>
            <DefaultInput type="file" setValue={handleFile} name="image" lable="Image"  error={errorsValidate.errorImage}/>
            <input type="submit" value="Submit" />
        </form>
    
    </div>
  )
}

export default PostsCreate
