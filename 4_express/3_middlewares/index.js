const path = require('path')
const express = require('express')
const app = express()
const port = 3333

const basePath = path.join(__dirname,'html')

const checkAuth = (req,res,next)=>{
    req.authStatus = true

    if(req.authStatus){
        console.log('acesso aceito')
        next()
    }else{
        console.log('acesso negado')
        next()
    }

    return req.authStatus
}

app.use(checkAuth)

app.get('/',(req,res)=>{
    if(req.authStatus){
        res.sendFile(`${basePath}/index.html`)
    }else{
        res.sendFile(`${basePath}/error.html`)
    }
})

app.listen(port,()=>{
    console.log(`rodando na port ${port}`)
})