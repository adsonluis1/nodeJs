const path = require('path')
const express = require('express')
const app = express()
const produtos = require('./produtos')

const port = 5000
const basePath = path.join(__dirname,'public/html')

app.use(express.static('public'))

app.use('/produtos',produtos)

app.get('/',(req, res)=>{
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, ()=>{
    console.log(`rodando na porta ${port}`)
})