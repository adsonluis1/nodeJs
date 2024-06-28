const http = require('http')
const fs = require('fs')
const port = 3333

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Contenty-Type':'text/html'})
    fs.readFile('index.html','utf-8',(err,data)=>{
        if(err){
            res.statusCode = 500
            res.end(`<h1>Vixe... alguma coisa deu errado<\h1>`)
        }else{
            res.write(data)
            res.end()
        }
    })
})

server.listen(port,()=>{
    console.log('rodando')
})

