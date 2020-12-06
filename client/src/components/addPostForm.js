import React,{useContext,useState} from 'react'
import { GlobalContext } from '../Contexts'





const AddPost = ()=>{
    let {posts} = useContext(GlobalContext)
    const[post,setPost] = useState({title:'',contents:''})
    const handleChanges = e=>{
        e.preventDefault()
        setPost({...post,[e.target.name]:e.target.value})
    }


    const AddNewPost=post=>{

    }

    return(
        <div>
            <form>
                <input type='text' name='title' placeholder='Enter Title' value={post.title} onChange={handleChanges}/> 
                <input type='text' name='contents' placeholder='Enter Title' value={post.contents} onChange={handleChanges}/> 
                <button onClick={()=>{AddNewPost(post)}}>Add new Post</button>
            </form>

        </div>
    )
}

export default AddPost