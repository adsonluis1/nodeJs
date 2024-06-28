const http = require(`http`)
const port = 3333

const server = http.createServer((req, res)=>{
    const urlinfo = require(`url`).parse(req.url)
    let name = urlinfo.search?.split('=')[1]
    res.statusCode = 200
    res.setHeader('Contenty-Type','text/html')
    
    if(!name){
        res.end(`
            <h1>Nome incorreto digite seu nome aqui:</h1>
            <form>
                <input placeholder='nome' name='name' type='text' />
                <input type='submit' value='enviar'/>
            </form>    
        `)
    }else{
        if(name.includes('+'))
            name = name.replace('+',' ')
        res.end(`<h1>${name} cadastrado!</h1>`)
    }

})

server.listen(port,()=>{
    console.log(`rodando`)
})