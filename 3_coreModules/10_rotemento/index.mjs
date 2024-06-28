import * as fs from "fs"
import * as http from "http"
import * as url from "url"

const port = 3333
const server = http.createServer((req, res)=>{
    const pagina = url.parse(req.url).pathname.substring(1)
    if(!pagina.includes('.')){
        if(pagina == ``){
            fs.readFile('home.html',(err,data)=>{
                res.writeHead(200,{'Contenty-Type':'text/html'})
                res.write(data)   
                return res.end()     
            })
        }

        const arquivo = pagina+'.html'
        if(fs.existsSync(arquivo)){
            fs.readFile(arquivo,(err,data)=>{
                res.statusCode = 200
                res.write(data)
                return res.end()    
            })
        }
        else{
            fs.readFile('404.html',(err, data)=>{
                res.statusCode = 200
                res.write(data)
                return res.end()
            })
        }
    }

})

server.listen(port,()=>{
    console.log('rodando')
})


