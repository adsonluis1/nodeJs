const mysql = require('mysql')
const engine = require('express-handlebars').engine
const express = require('express')
const app = express()

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: '',
    database:'nodemysql'
})

app.use(express.urlencoded(
    {extended: true}
))

app.use(express.json())

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.use(express.static('public'))

app.get('/',(req, res)=> {
    res.render('home')
})

app.post('/books/add',(req, res)=>{
    const {title, pagesqty} = req.body

    const sql = `INSERT INTO books (title, pagesqty) VALUES ('${title}', '${pagesqty}')`

    con.query(sql,(err)=>{
        if(err){
            console.log(err)
        }

        res.redirect('/')
    })
})

con.connect((err)=>{
    if (err){
    console.log(err)
    return
    }

    console.log('conect in Database')
    app.listen(3333,()=>{
        console.log('rodando')
    })
})
