const engine = require('express-handlebars').engine
const express = require('express')
const app = express()
const mysql = require('mysql')


app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views','./views')

app.get('/',(req, res)=>{
    res.render('home')
})

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'nodemysql'
})

con.connect((err)=>{
    if(err){
        console.log(err)
        return
    }

    console.log('Conectado ao banco de dados')

    app.listen(3333)
})