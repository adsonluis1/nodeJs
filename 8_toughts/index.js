const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const conn = require('./db/conn')
const Post = require('./models/Posts')
const Users = require('./models/Users')
const userRouter = require('./routes/userRouter') 

const newEngine = handlebars.create([
    {partialsDir:'views/partials'}
])


app.engine('handlebars',newEngine.engine)
app.set('view engine', 'handlebars')
app.set('views','./views')
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use(express.json())
app.use('/user', userRouter)

app.get('/', async (req, res)=>{
    // POST
    // const title = 'Js >>> all'
    // const u = {
    //     email:'adson@gmail.com',
    //     nome:'Adson Luis'
    // }
    // const user = JSON.stringify(u)

    // GET
    const postsJson = await Post.findAll({raw:true})
    const posts = []
    console.log(postsJson)
    postsJson.map((post)=>{
        const obj = JSON.parse(post.user)
        const user = JSON.parse(obj)
        post.user = user
        posts.push(post)
    })
    
    res.render('showPosts',{posts})
})

conn.sync()
.then(()=>{
    console.log('conectado no banco')
    app.listen(3333,()=>{
        console.log('aplicação rodando')
    })
})
.catch((err)=>{
    console.log(`ERROR - ${err}`)
})
