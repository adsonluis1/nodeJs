const express = require('express')
const app = express()

// configurando
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/',(req, res)=>{
    res.status(200).json({message:'hello world'})
})

app.post('/createproduct', (req, res)=>{
    const {name, price} = req.body
    
    if(!name){
        res.status(422).json({message:"name is input required"})
        return
    }

    if(!price){
        res.status(422).json({message:"price is input required"})
        return
    }

    res.status(201).json({message:`O produto ${name} foi criado com sucesso`})
})

app.listen(3333)