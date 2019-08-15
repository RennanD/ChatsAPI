require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})
const express = require('express')
const cors = require('cors')
const routes =  require('./routes')

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
app.use(cors())

io.on('connection', socket => {
    console.log(socket.id)
    socket.on('connectChat', chat => {
        socket.join(chat)
    })
})


app.use((req, res, next)=>{
    req.io = io
    return next()
})
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT)