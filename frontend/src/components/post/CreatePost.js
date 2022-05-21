import React, { useState } from 'react'
import DefualtInput from '../helperComponent/DefualtInput'
import DefualtTextarea from '../helperComponent/DefualtTextarea'
import axios from 'axios'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {

  const navigate =  useNavigate();
  const[title , setTitle]=useState(''); 
  const[errorTitle , setErrorTitle]=useState(''); 

  const[description , setDescription]=useState(''); 
  const[errorDescription , setErrorDescription]=useState('');

  const[image , setImage]=useState(''); 
  const[errorImage , setErrorImage]=useState('');  

  const handleFile=(e)=>{
    setImage(e.target.files[0]);
  }  
  const handleSubmit =(e)=>{

    e.preventDefault();
    setErrorTitle('');
    setErrorDescription('');
    setErrorImage('');
    const formData = new FormData();
    formData.append('title',title);
    formData.append('description',description);
    formData.append('image',image);
   axios.post(`${process.env.REACT_APP_BASE_URL_API}/posts/create`,formData)
    .then(({data})=>{
        toast.success(data.message);
        setTimeout(function(){
            navigate('/')
        },1000)
       
    }).catch(({response})=>{
        toast.error(response.data.message);
        if (response.status === 422) {
            response.data.errors.title?setErrorTitle(response.data.errors.title[0]) : setErrorTitle('');
            response.data.errors.description?setErrorDescription(response.data.errors.description[0]) : setErrorDescription('');
            response.data.errors.image?setErrorImage(response.data.errors.image[0]) : setErrorImage(''); 
        }
    });
     
  }  
  return (
    <div>
      
        <h3 className='text-center mt-5'>
            Create Post
        </h3>
        <div className='row justify-content-center mt-5'>
            
            <div className='col-6'>
                <form onSubmit={handleSubmit}>
                    <DefualtInput error={errorTitle} handleSetValue={(e)=>{setTitle(e.target.value)}} value={title} type="text" lable="Title" name="title"/>
                    
                    <DefualtTextarea error={errorDescription} handleSetValue={(e)=>{setDescription(e.target.value)}} value={description} lable="Description" name="description"/>
                    <DefualtInput error={errorImage} handleSetValue={handleFile} type="file" lable="Image" name="image"/>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
            
        </div>
        
    </div>
  )
}

export default CreatePost
