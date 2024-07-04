const path = require('path')
const express = require('express')
const app = express()
const port = 3333

const basePath = path.join(__dirname,'public/html')

app.get('/',(req,res)=>{
    res.sendFile(`${basePath}/index.html`)
})

app.use(express.static('public'))

app.listen(port,()=>{
    console.log(`rodando na porta ${port}`)
})