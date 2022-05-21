import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import DefualtInput from '../helperComponent/DefualtInput';
import DefualtTextarea from '../helperComponent/DefualtTextarea';


const EditPost = () => {
    const[title , setTitle]=useState(null); 
    const[errorTitle , setErrorTitle]=useState(''); 
  
    const[description , setDescription]=useState(null); 
    const[errorDescription , setErrorDescription]=useState('');
  
    const[image , setImage]=useState(''); 
    const[errorImage , setErrorImage]=useState('');

    const  {id} = useParams();
    const[post,setPost] = useState(null);
    const[messageAlert , setMessageAlert]=useState('')
    useEffect(()=>{
        getPost();
    },[])
    const getPost =async ()=>{
    
        await axios.get(`${process.env.REACT_APP_BASE_URL_API}/posts/show/${id}`)
        .then(({data})=>{
            setPost(data.data)
            setTitle(data.data.title);
            setDescription(data.data.description);
        }).catch(({response})=>{
            setMessageAlert(response.data.message)
        })
    }

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
        formData.append('_method','PATCH');
        formData.append('description',description);
        if (image !== null) {
            formData.append('image', image)
        }
       axios.post(`${process.env.REACT_APP_BASE_URL_API}/posts/update/${id}`,formData)
        .then(({data})=>{
            toast.success(data.message);
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
      {post ? (
        <div>
        <h3 className='text-center mt-5'>
            EDIT POST 
        </h3>
        <div className='row justify-content-center mt-5'>
            
            <div className='col-6'>
                <form onSubmit={handleSubmit}>
                    <DefualtInput error={errorTitle} handleSetValue={(e)=>{setTitle(e.target.value)}} value={title} type="text" lable="Title" name="title"/>
                    <DefualtTextarea error={errorDescription} handleSetValue={(e)=>{setDescription(e.target.value)}} value={description } lable="Description" name="description"/>
                    <DefualtInput error={errorImage} handleSetValue={handleFile} type="file" lable="Image" name="image"/>
                    <button type="submit" className="btn btn-primary">Update</button>
                </form>
            </div>
            
        </div>
        </div>
      ) : messageAlert}
    </div>
  )
}

export default EditPost

