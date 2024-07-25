const express = require('express')
const brasileiraoARouter = require('./routes/brasileiraoRoutes')
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/brasileiraoA', brasileiraoARouter)

app.get('/', async (req,res)=>{
    res.json({message:'ola mundo'})
})

app.listen(3333,()=>{
    console.log('rodando')
})
