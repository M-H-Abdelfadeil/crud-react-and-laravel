import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams , useNavigate} from 'react-router-dom'
import {requestPostsShow} from '../../../requests/posts/requestPostsShow';
import { requestPostsDelete } from '../../../requests/posts/requestPostsDelete';

function PostsShow() {
    const dispatch = useDispatch()
    const  {errorMsg , post}= useSelector(state=>state.postsShow)
    const navigate = useNavigate();
    const {id} = useParams()
    useEffect(()=>{
      dispatch(requestPostsShow(id))
    },[])
    const deletePost = (postId)=>{
      if(window.confirm('هل انت متاكد من الحذف ؟'))
       requestPostsDelete(postId)
       
         navigate('/')
        
     }

  return (
    <div>
        {post ? (

          <div key={post.id} className='contaier-card'>
                <h3>{post.title}</h3>
                <div className='box-image'>
                    <img src={post.image} alt="" />
                </div>
                <p>{post.description}</p>
                <div className='box-buttons'>
                   
                    <button className='btn-edit'>Edit</button>
                    <button onClick={()=>deletePost(post.id)} className='btn-delete'>Delete</button>
                </div>
          </div>
        ) : errorMsg}
    </div>
  )
}

export default PostsShow
