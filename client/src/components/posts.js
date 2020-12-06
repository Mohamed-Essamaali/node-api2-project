import React,{useContext} from 'react'
import Post from './post'
import axios from 'axios'
import { GlobalContext } from '../Contexts'
import AddPost from './addPostForm'

const Posts = ()=>{

let {setPosts,posts}= useContext(GlobalContext)

const fetch = ()=>{
    axios
    .get('http://localhost:5000/api/posts')
    .then(res=>{setPosts(res.data);console.log(res.data)})
    .catch(err=>console.log(err))
  }

    return(
        <div>
           <AddPost/> 
           {posts.map(post=>{
              return <Post post={post}/>
           })}
             <button onClick={(e)=>{fetch();e.preventDefault()}}>Fetch</button>
            

        </div>
    )
}

export default Posts