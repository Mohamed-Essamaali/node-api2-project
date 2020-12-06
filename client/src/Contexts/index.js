import React,{useState,createContext} from 'react'
export const GlobalContext = createContext()

const MyContextProvider = (props)=>{

    const[posts,setPosts] = useState([])
    const[post,setPost] = useState({title:'',content:''})
    const[comments,setComments] = useState([])
    const[comment, setComment] = useState({text:''})

    return(
        <GlobalContext.Provider value={{posts,setPosts,post,setPost,comments,setComments,comment,setComment}}>
            {props.children}
        </GlobalContext.Provider>
    )
   
}

export default MyContextProvider