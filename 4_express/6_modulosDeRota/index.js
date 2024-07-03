const express = require('express')
const app = express()
const port = 3333
const users = require('./users')


app.use(
    express.urlencoded({
        extended:true  
    })
)

app.use(express.json())

app.use('/users', users)

app.get('/',(req, res)=>{
    res.send(`<h1>Home</h1>`)
})

app.listen(port,()=>{
    console.log(`rodando na porta ${port}`)
})