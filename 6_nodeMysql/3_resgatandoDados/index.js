const mysql = require('mysql')
const handlebars = require('express-handlebars')
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

const newEngine = handlebars.create([
    {partialsDir:'views/partials'}
])

app.engine('handlebars', newEngine.engine)
app.set('view engine', 'handlebars')
app.set('views', './views')

app.use(express.static('public'))


app.get('/',(req, res)=> {
    res.render('home')
})

app.get('/books',(req, res)=>{
    const search = "SELECT * FROM books"
    let books
    con.query(search,(err,data)=>{
        if(err){
            console.log(err)
            res.redirect('/')
            return
        }

        books = data
        res.render('showBooks', {books})
    })

})

app.post('/books/add',(req, res)=>{
    const {title, pagesqty} = req.body
    
    const sql = `INSERT INTO books (title, pagesqty) VALUES ('${title}', '${pagesqty}')`
    
    con.query(sql,(err)=>{
        if(err){
            console.log(err)
        }
        
        res.redirect('/books')
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
