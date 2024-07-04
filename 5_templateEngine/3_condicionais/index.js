const engine = require('express-handlebars').engine
const express = require("express")
const app = express() 

app.engine('handlebars',engine())
app.set('view engine','handlebars')
app.set('views','./views')

app.get('/',(req, res)=>{
    const user = {
        nome:'adson',
        idade:17
    }   

    let auth = false

    if(user.idade > 17){
        auth = true
    }

    res.render('home',{user:user, auth})    
})

app.listen(3333,()=>{
    console.log('rodando')
})
