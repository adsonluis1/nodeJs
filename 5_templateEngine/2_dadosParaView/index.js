const engine = require('express-handlebars').engine
const express = require('express')
const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.get('/',(req, res)=>{
    const user = {
        nome:'adson',
        sobreNome:'luis'
    }
    res.render('home', {user})
})

app.listen(3333, ()=>{
    console.log('rodando')
})