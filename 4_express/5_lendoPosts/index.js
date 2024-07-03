const path = require('path')
const express = require('express')
const app = express()
const port = 3333
const basePath = path.join(__dirname,'html')

app.use(
    express.urlencoded({
        extended:true
    })
)

app.use(express.json())

app.post('/users/save',(req,res)=>{
    console.log(req.body)
})

app.get('/',(req, res)=>{   
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port,()=>{
    console.log(`rodando na porta ${port}`)
})