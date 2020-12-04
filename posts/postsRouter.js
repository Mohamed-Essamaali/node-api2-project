const express = require('express')
const posts = require('../data/db')

const router = express.Router()

router.get('/',(req,res)=>{
    res.json({message:"Welcome to posts API"})
})

//   get all posts
router.get('/api/posts',(req,res)=>{

    posts.find()
    // return Promise.reject()
    .then(posts=>{
        res.status(200).json(posts)
    })
    .catch(error=>{
        console.log(error);
        res.status(500).json({message:"Couldn't retrieve the posts"})
    })

})

//   get all post based on id
router.get('/api/posts/:id',(req,res)=>{

    posts.findById(req.params.id)
    // return Promise.reject()
    .then(post=>{
        res.status(200).json(post)
    })
    .catch(error=>{
        console.log(error);
        res.status(500).json({message:"Couldn't retrieve the post"})
    })

})
//   get all comments for single post based on post id
router.get('/api/posts/:id/comments',(req,res)=>{

    posts.findPostComments(req.params.id)
    // return Promise.reject()
    .then(comments=>{
        res.status(200).json(comments)
    })
    .catch(error=>{
        console.log(error);
        res.status(500).json({message:"Couldn't retrieve the post"})
    })

})

//   add post 
router.post('/api/posts',(req,res)=>{
    let {title,contents}= req.body

    if(!title || !contents){
        return res.status(400).json({errorMessage: "Please provide title and contents for the post."})
    }

    posts.insert(req.body)
    // return Promise.reject()
    .then(post=>{
        res.status(201).json(post)
    })
    .catch(error=>{
        console.log(error);
        res.status(500).json({message: "There was an error while saving the post to the database"})
    })

})


module.exports = router