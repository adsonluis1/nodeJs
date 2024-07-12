const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('express-flash')
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
app.use(
    session(
        {
        name:'session',
        secret: 'nosso_secret',
        resave: false,
        saveUninitialized:false,
        store:new FileStore({
            logFn: function() {},
            path: require('path').join(require('os').tmpdir(), 'sessions')
        }),
        cookie: {
            segure:false,
            maxAge: 86400000,
            expires: new Date(Date.now() + 86400000),
            httpOnly: true
        }
    })
)

app.use('/user', userRouter)
app.use(flash())

app.use((req,res,next) => {

    if(req.session.account){
        res.locals.session = req.session
    }

    next()
})

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
    postsJson.map((post)=>{
        const obj = JSON.parse(post.user)
        const user = JSON.parse(obj)
        post.user = user
        posts.push(post)
    })
    console.log(req.session.account)
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
