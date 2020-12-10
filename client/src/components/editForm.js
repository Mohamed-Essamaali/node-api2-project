import React,{useContext,useEffect,useState} from 'react'
import { GlobalContext } from '../Contexts'
import {useParams,useHistory} from 'react-router-dom'
import axios from 'axios'


const EditPost = ()=>{

    let {push} = useHistory()
    let params = useParams()

    let {posts,setEditing} = useContext(GlobalContext)
    const[post,setPost] = useState({title:'',contents:''})

    const handleChanges = e=>{
        e.preventDefault()
        setPost({...post,[e.target.name]:e.target.value})
        console.log(post)
    }
    useEffect(()=>{
        setPost(posts.find(post=>post.id===Number(params.id)))
    },[])

    const save = (e) =>{
        e.preventDefault()
        setEditing(false)
        push('/')
        axios
        .put(`https://mohamed-node-api4.herokuapp.com/api/posts/${post.id}`,post)
        .then(res=>{console.log('updated post ',res.data)})
        .catch(err=>{console.log(err)})
        
    }

    return(
        <div>
            <form>
                <input type='text' name='title' placeholder='Enter Title' value={post.title} onChange={handleChanges}/> 
                <input type='text' name='contents' placeholder='Enter Title' value={post.contents} onChange={handleChanges}/> 
                <button onClick={save}>Save</button>
            </form>

        </div>
    )
}

export default EditPost