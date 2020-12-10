import React,{useContext} from 'react'
import axios from 'axios'
import {useParams,useHistory} from 'react-router-dom'
import { GlobalContext } from '../Contexts'

const Post = ()=>{
    let params= useParams()
    let {push} = useHistory()
    let {setEditing,posts} = useContext(GlobalContext)

    console.log('params',params)
    

    let post = posts.find(post=>post.id===Number(params.id))
    const editPost =()=>{
        push(`/updatepost/${params.id}`)
        setEditing(true)
    

    }
    const deletePost =()=>{
        axios
        .delete(`https://mohamed-node3.herokuapp.com/posts/${post.id}`)
        .then(res=>{console.log('deleted successfully');push('/')})
        .catch(err=>console.log(err))
    }

    return(
        <div className='post-card'>
            <h4>{post.title}</h4>
            <p>{post.contents}</p>
            <div>
                <button onClick={()=>{editPost()}}>Edit</button>
                <button onClick={()=>{deletePost()}}>delete</button>
                <button onClick={()=>{push('/')}}>Cancel</button>
            </div>

        </div>
    )
}

export default Post