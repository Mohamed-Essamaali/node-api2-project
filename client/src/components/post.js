import React,{useContext} from 'react'

const Post = ({post})=>{


    return(
        <div className='post-card'>
            <h3>{post.title}</h3>
            <p>{post.contents}</p>
            <div>
                <button>Edit</button>
                <button>delete</button>
            </div>

        </div>
    )
}

export default Post