const express = require('express')
const cors = require('cors')
const colors= require('colors')
const postsRouter = require('./posts/postsRouter')
const server = express()

server.use(express.json())
server.use(cors())

server.use(postsRouter)

const PORT = process.env.PORT || 5000
server.listen(PORT,()=>{
    console.log('server is running at http://localhost:5000'.bold)
})