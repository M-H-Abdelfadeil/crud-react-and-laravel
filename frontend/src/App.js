import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/layout/Navbar'
import Posts from './components/post/Posts'
import CreatePost from './components/post/CreatePost'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PostDetails from './components/post/PostDetails'
import EditPost from './components/post/EditPost'

const App = () => {
  return (
    <div className='container'>
    
 
        <Router>
        <Navbar />
        <ToastContainer />
            <Routes>
                <Route path='/' element={<Posts />}/>
                <Route path='/posts/create' element={<CreatePost />}/>
                <Route path='/posts/show/:id' element={<PostDetails />}/>
                <Route path='/posts/edit/:id' element={<EditPost />}/>
            </Routes>
        </Router>
    </div>
  )
}

export default App
