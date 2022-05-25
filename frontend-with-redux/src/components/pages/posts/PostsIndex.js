import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { requestPostsDelete } from '../../../requests/posts/requestPostsDelete';
import { requestPostsIndex } from '../../../requests/posts/requestPostsIndex';
const PostsIndex = () => {
  
  const dispatch = useDispatch();
  const {posts} = useSelector(state=>state.postsIndex)
 
   useEffect(()=>{
    dispatch(requestPostsIndex())
   },[])
   
   

   const deletePost = (postId)=>{
     if(window.confirm('هل انت متاكد من الحذف ؟'))
      requestPostsDelete(postId)
      
      
    }
   
  return (
    <div>
    {posts && posts.length > 0 ? 
      posts.map((post)=>
        (

          <div key={post.id} className='contaier-card'>
                <h3>{post.title}</h3>
                <div className='box-image'>
                    <img src={post.image} alt="" />
                </div>
                <div className='box-buttons'>
                    <Link to={"posts/show/"+post.id} className='btn-details'>Details</Link>
                    <Link to={"posts/edit/"+post.id} className='btn-edit'>Edit</Link>
                    <button onClick={()=>deletePost(post.id)} className='btn-delete'>Delete</button>
                </div>
          </div>
        )
      )
     :'Not Posts'}

      
    </div>
  )
}

export default PostsIndex
