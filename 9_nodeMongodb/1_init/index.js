const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const conn = require('./db/conn')
const produtosRouter = require('./routes/produdosRouter')
const ProdutosControllers = require('./controllers/ProdutosControllers')

// config handlebars
const newEngine = handlebars.create({partialsDir:"views/partials"})
app.engine('handlebars',newEngine.engine)
app.set('view engine', 'handlebars')
// config pasta public
app.use(express.static('public'))
// middle para ler o body
app.use(express.urlencoded({extended:true})) 
app.use(express.json())
// router
app.use('/produtos',produtosRouter)


// aplicação
app.get('/', ProdutosControllers.showProducts)

app.listen(3333,()=>{
    console.log('rodadndo')
})