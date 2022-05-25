import axios from "axios";
import { toast } from "react-toastify";



export const requestPostsDelete = (postId)=>{

    axios.delete(`${process.env.REACT_APP_URL_API}/posts/delete/${postId}`)
    .then(({data})=>{
        toast.success(data.message)
    }).catch(({response})=>{
        toast.error(response.data.message)
    })
}



