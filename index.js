const express = require('express')
const postsRouter = require('./posts/postsRouter')
const PORT = 5000
const server = express()

server.use(express.json())
server.use(postsRouter)

server.listen(PORT,(req,res)=>{
    console.log('server is running at http://localhost:5000')
})