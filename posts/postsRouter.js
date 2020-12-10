const express = require('express')
const { update } = require('../data/db')
const posts = require('../data/db')

const router = express.Router()

router.get('/',(req,res)=>{
    res.json({
        message:`Welcome ${process.env.COHORT} to posts API`,
        sprint : process.env.SPRINT || "No Sprint yet"

    })
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
        if(!post.length){
            res.status(404).json({message:`post with id ${req.params.id} doesn't exist`})
        }else
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
//   add comments ?
router.post('/api/posts/:id/comments',(req,res)=>{
    let {text}= req.body
    let comment = req.body
    comment.post_id = req.params.id
    if(!req.body.text){
        return res.status(400).json({errorMessage: "Please provide text for the comments."})
    }
    console.log('req.body ', req.body)
    posts.insertComment(comment)
    
    .then(comment=>{
        res.status(201).json(comment)
    })
    .catch(error=>{
        console.log(error);
        res.status(500).json({message: "There was an error while saving the comments to the database"})
    })

})

//  update the post
router.put('/api/posts/:id',(req,res)=>{

    // let getposts = posts.find()
    // let active = getposts.find(post=>post.id===req.params.id)
    // if(!active){
    //     return res.status(404).json({message:`No post with id ${req.params.id}`})
    // }
    posts.update(req.params.id,req.body)
    .then(updatedPost=>{
        res.status(204).json(updatedPost)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({message:"There was an error while updating the post to the database"})
    })
})

//delete post

router.delete('/api/posts/:id',(req,res)=>{
    console.log('req.params.id',req.params.id)
    posts.remove(req.params.id)
    .then(()=>{
        res.send(`post with id ${req.params.id} deleted successfully`)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({message:"There was an error while deleting the post"})
    })
})


module.exports = router