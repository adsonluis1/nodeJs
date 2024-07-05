const engine = require('express-handlebars').engine
const express = require('express')
const app = express()

app.engine('handlebars',engine())
app.set('view engine','handlebars')
app.set('views','./views')
express.static('public')

app.get('/',(req, res)=>{
    let user = {
        nome:'adson',
        idade:19,
        cnh:true
    }

    res.render('home',{user})
})

app.listen(3333,()=>{
    console.log('rodando')
})
