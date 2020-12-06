import React,{useContext,useEffect} from 'react'
import Post from './post'
import axios from 'axios'
import { GlobalContext } from '../Contexts'
import AddPost from './addPostForm'
import EditPost from './editForm'
import { Link } from 'react-router-dom'

const Posts = ()=>{

let {setPosts,posts,editing}= useContext(GlobalContext)

    useEffect(()=>{
        
            axios
            .get('http://localhost:5000/api/posts')
            .then(res=>{setPosts(res.data);console.log(res.data)})
            .catch(err=>console.log(err))
        
    },[])


    return(
        <div>
            {editing ? <EditPost/> : <AddPost/>}
            
           <div className='posts-container'>
           {posts.map(post=>{
              return<div className='post-card' >
                  <Link to ={`/post/${post.id}`}>
                    <h4>{post.title}</h4>
                    <p>{post.contents}</p>
                  </Link>
                </div>
           })}
           </div>
           
            

        </div>
    )
}

export default Posts