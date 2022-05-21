import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
const Posts = () => {

  const [posts , setPosts]=useState(null);
  useEffect(()=>{
        getPosts();
  },[])
  const getPosts = async ()=>{
    await axios.get(`${process.env.REACT_APP_BASE_URL_API}/posts`).then(({data})=>{
      if(data.data.length>0){
        setPosts(data.data);
      } 
      
    }).catch(({response})=>{
        toast.error( response.data.message)
    })
  }  
  return (
    <div>
     <div className='row'>
     
        
        
    {
        posts? posts.map((post)=>(
            <div key={post.id} className='col-4 mt-3'>

                <div className="card">
                    <img src={post.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <Link to={"/posts/show/"+post.id} className="btn btn-primary">Details</Link>
                    </div>
                </div>

            </div>
            
        )):"No Posts"
    }  


     </div>   
        
    </div>
  )
}

export default Posts
