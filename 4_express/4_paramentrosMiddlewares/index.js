const path = require('path')
const express = require('express')
const app = express()
const port = 3333

const basePath = path.join(__dirname,"html")

const idUser = (req, res, next)=>{
    console.log(req.params.id)
    next()
}

app.use('/:id', idUser)

app.get('/:id',(req,res)=>{
    res.sendFile(`${basePath}/achado.html`)
})

app.get('/',(req,res)=>{
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port,()=>{
    console.log(`rodando na porta ${port}`)
})