const handlebars = require('express-handlebars')
// const engine = handleBars.engine
const express = require('express')
const app = express()

const produtos = [
    {
        nome:'Pão',
        preco: '0.50'
    },
    {
        nome:'Sonho',
        preco: '1.50'
    },
    {
        nome:'Pão de alho',
        preco: '2.00'
    },
    {
        nome:'Doce de abacaxi',
        preco: '3.50'
    }
]

const newEngine = handlebars.create({
    partialsDir:['views/partials']
})

app.use(express.static('public'))

app.engine('handlebars',newEngine.engine)
app.set('view engine','handlebars')
app.set('views', './views')

app.get('/produto/:id',(req, res)=>{
    const {id} = req.params

    const selectProduct = produtos.filter((produto)=> produto.nome == id)[0]

    res.render('product', {selectProduct})
})

app.get('/',(req, res)=>{
    

    res.render('home', {produtos})
})

app.listen(3333,()=>{
    console.log('rodando')
})