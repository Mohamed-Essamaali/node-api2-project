import React,{useContext,useState} from 'react'
import { GlobalContext } from '../Contexts'
import axios from 'axios'
import {useHistory} from 'react-router-dom'





const AddPost = ()=>{
    let {push} = useHistory()
    let {posts} = useContext(GlobalContext)
    const[post,setPost] = useState({title:'',contents:''})
    const handleChanges = e=>{
        e.preventDefault()
        setPost({...post,[e.target.name]:e.target.value})
      
    }


    const AddNewPost=(e)=>{
        e.preventDefault()
       
       
        axios
        .post(`http://localhost:5000/api/posts`,post)
        .then(res=>{console.log('Added post ',res.data); push('/');setPost({title:'',contents:''})})
        .catch(err=>{console.log('Error in adding post',err)})
    }

    return(
        <div className='form-post'>
            <form>
                <input type='text' name='title' placeholder='Enter Title' value={post.title} onChange={handleChanges}/> 
                <input type='text' name='contents' placeholder='Enter Contents' value={post.contents} onChange={handleChanges}/> 
                <button onClick={AddNewPost}>Add new Post</button>
            </form>

        </div>
    )
}

export default AddPost