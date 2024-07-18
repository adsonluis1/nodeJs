const express = require('express')
const app = express()

// configurando
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/',(req, res)=>{
    res.json({menssage:'hello world'})
})

app.listen(3333)