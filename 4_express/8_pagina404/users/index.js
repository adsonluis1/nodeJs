const path = require('path')
const express = require('express')
const router = express.Router()

const basePath = path.join(__dirname,'../public/html')

router.post('/save',(req,res)=>{
    res.status(201)
    console.log(req.body)
})

router.get('/add',(req,res)=>{
    res.status(201)
    res.sendFile(`${basePath}/setUsers.html`)
})


module.exports= router



