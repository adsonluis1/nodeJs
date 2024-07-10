const pool = require('./db/conn')
const handlebars = require('express-handlebars')
const express = require('express')
const app = express()

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
    pool.query(search,(err,data)=>{
        if(err){
            console.log(err)
            res.redirect('/')
            return
        }

        books = data
        res.render('showBooks', {books})
    })

})

app.get('/books/:id',(req, res)=>{
    const idBook = req.params.id
    const search = `SELECT * FROM books WHERE ?? = ?`
    const data = ["id",idBook]
    let book
    let auth = true 
    pool.query(search,data,(err, data)=>{
        if(err){
            console.log(err)
            res.redirect('/')
            return
        }
        book = data[0]
        if(book == undefined){
            auth = false
        }
        book = data[0]
        res.render('showBook',{book,auth})
    })
    
})

app.get('/books/edit/:id',(req, res)=>{
    const idBook = req.params.id
    const search = `SELECT * FROM books WHERE ?? = ?`
    const data = ["id",idBook]
    let book
    let auth = true 
    pool.query(search,data,(err, data)=>{
        if(err){
            console.log(err)
            res.redirect('/')
            return
        }
        book = data[0]
        if(book == undefined){
            auth = false
        }
        book = data[0]
        res.render('editBook',{book,auth})
    })
})

app.get('/books/remove/:id',(req, res)=>{
    const idBook = req.params.id
    
    const search = `DELETE FROM books WHERE ?? = ?`
    const data = ["id",idBook]
    pool.query(search,data,(err)=>{
        if(err){
            console.log(err)
        }
        
        res.redirect('/books')
    })
})

app.post('/books/add',(req, res)=>{
    const {title, pagesqty} = req.body
    
    const search = `INSERT INTO books (??, ??) VALUES (?, ?)`
    const data = ['title','pagesqty',title,pagesqty]
    pool.query(search,data,(err)=>{
        if(err){
            console.log(err)
        }
        
        res.redirect('/books')
    })
})

app.post('/book/edit/add',(req, res)=>{
    const {id, title, pagesqty} = req.body

    const search = `UPDATE books SET ??=?, ??=? WHERE ??=?`
    const data = ['title',title,'pagesqty',pagesqty,'id',id]
    pool.query(search,data,(err)=>{
        if(err){
            console.log(err)
        }
        
        res.redirect('/books')
    })

})

app.listen(3333,()=>{
    console.log('rodando')
})
