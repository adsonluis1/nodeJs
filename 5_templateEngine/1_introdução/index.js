const express = require('express')
const app = express()
const engine = require('express-handlebars').engine

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.get('/', (req, res)=>{
    res.render('home')
})

app.listen(3333, ()=>{
    console.log('rodando')
})
