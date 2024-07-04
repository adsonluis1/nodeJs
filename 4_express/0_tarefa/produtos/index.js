const path = require('path')
const express = require('express')
const router = express.Router()

const basePath = path.join(__dirname,'../public/html')

router.get('/',(req, res)=>{
    res.sendFile(`${basePath}/produtos.html`)
})

module.exports = router