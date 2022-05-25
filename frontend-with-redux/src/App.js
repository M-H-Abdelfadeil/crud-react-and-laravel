import './App.css'
import Navbar from "./components/layout/Navbar";
import { BrowserRouter  as Router, Route, Routes } from "react-router-dom";
import PostsIndex from './components/pages/posts/PostsIndex';
import PostsCreate from './components/pages/posts/PostsCreate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PostsShow from './components/pages/posts/PostsShow';
import PostsEdit from './components/pages/posts/PostsEdit';
function App() {
  return (
    <div className="App">
      <Router >
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path='/' element={<PostsIndex />}/>
          <Route path='/posts/create' element={<PostsCreate />}/>
          <Route path='/posts/show/:id' element={<PostsShow />}/>
          <Route path='/posts/edit/:id' element={<PostsEdit />}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
