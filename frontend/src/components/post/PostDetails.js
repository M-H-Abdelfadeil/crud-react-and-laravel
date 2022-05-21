import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';


const PostDetails = () => {
  const navigate = useNavigate();
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
    }).catch(({response})=>{
      setMessageAlert(response.data.message)
    })
  }

  const deletePost=(postId)=>{
    if (window.confirm("Press a button!")) {
      axios.post(`${process.env.REACT_APP_BASE_URL_API}/posts/delete/${postId}`,{_method:'DELETE'})
      .then(({data})=>{
        navigate('/')
      }).catch(({response})=>{
     
        toast.error(response.statusText)
      })
     
    }
      
  }
  return (
    <div className='col-4'>
      {post ?  (
        <div className="card">
                    <img src={post.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <p>{post.description}</p> 
                        <Link to={"/posts/edit/"+post.id} className="btn btn-primary mr-3"> EDIT </Link>
                        <button onClick={()=>deletePost(post.id)} className="btn btn-danger">Delete</button>
                    </div>
                </div>
      ): messageAlert}
    </div>
  )
}

export default PostDetails
