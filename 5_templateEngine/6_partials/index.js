const handlebars = require('express-handlebars') 
const engine = handlebars.engine
const express = require('express')
const app = express()

function filterAcceptCnh (arr){
    let auth = []
    if(typeof arr == "object"){
        arr.filter((pessoa)=>{
        if(pessoa.idade > 17 && pessoa.cnh == false){
            auth.push(pessoa)
        }
    })}
    else if (arr.idade > 17 && arr.cnh == false){
        auth = arr
    }
    return auth
}

const newEngine = handlebars.create({
    partialsDir:['views/partials']
})


app.engine('handlebars', newEngine.engine)
app.set('view engine','handlebars')
app.set('views','./views')

app.get('/',(req, res)=>{
    let users = [
        {
            nome:'adson',
            idade:19,
            cnh:true
        }
        ,{
            nome:'luis',
            idade:23,
            cnh:false
        }
        ,{
            nome:'Roberta',
            idade:17,
            cnh:false
        }
        ,{
            nome:'Rafaelle',
            idade:24,
            cnh:false
        }
        ,{
            nome:'anne',
            idade:16,
            cnh:true
        }
    ]

    users = filterAcceptCnh(users)
    res.render('home', {users} )
})

app.listen(3333,()=>{
    console.log('rodando')
})
