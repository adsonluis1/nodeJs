const path = require('path')
const express = require('express')
const app = express()
const port = 3333
const users = require('./users')

const basePath = path.join(__dirname,'public/html') 

app.use(
    express.urlencoded({
        extended:true  
    })
)

app.use(express.json())

app.use('/users', users)

app.use(express.static('public'))

app.get('/',(req, res)=>{
    res
    .status(201)
    .sendFile(`${basePath}/index.html`)
})

app.use((req,res,next)=>{
    res
    .status(404)
    .sendFile(`${basePath}/404.html`)
})

app.listen(port,()=>{
    console.log(`rodando na porta ${port}`)
})