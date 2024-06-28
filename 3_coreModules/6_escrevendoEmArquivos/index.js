const http = require('http')
const fs = require('fs')
const url = require('url')
const port = 3333

const server = http.createServer((req, res)=>{   
    const name = url.parse(req.url).search?.split(`=`)[1]
    fs.readFile('index.html','utf-8',(err, data)=>{
        if(err){
            res.statusCode = 500
            res.write('<h1>Vixe... erro encontrado</h1>')
            return res.end()
        }
        if(!name){
            res.writeHead(200,{'Contenty-Type':'text-html'})
            res.write(data)
            return res.end()
        }

        fs.writeFile('index.txt',name,(err, data)=>{
            res.writeHead(302,{
                location:'/'
            })
            return res.end()
        })


    })
})

server.listen(port,()=>{
    console.log('rodando')
})