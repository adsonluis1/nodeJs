const path = require('path')
const express = require('express')
const router = express.Router()

const basePath = path.join(__dirname,'../html')

router.post('/save',(req,res)=>{
    console.log(req.body)
})

router.get('/add',(req,res)=>{
    res.sendFile(`${basePath}/setUsers.html`)
})


module.exports= router



