const http = require('http')
const url = require('url')
const fs = require('fs')
const port = 3333

const server = http.createServer((req, res)=>{
    const name = url.parse(req.url).search?.split('=')[1]
        fs.readFile('index.html',(err,data)=>{
            if(err){
                res.statusCode = 501
                res.write(`<h1>Vixe... alguma coisa deu errado</h1>`)
                return res.end()
            }
            if(!name){
                res.writeHead(201,{'Contenty-type':'text/html'})
                res.write(data)
                return res.end()
            }

            const newName= name+'\r\n'
            fs.appendFile('index.txt',newName,(err)=>{
                if(err){
                    res.statusCode = 501
                    res.write(`<h1>Error no arquivo</h1>`)
                    return res.end()
                }

                res.writeHead(302,{
                    location:'/'
                })
                res.end()
            })
        })
    
})

server.listen(port,()=>{
    console.log('rodando')
})

