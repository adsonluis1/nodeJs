const express = require('express')
const handlebars = require('express-handlebars')

const app = express()
const port = 3000
const conn = require("./db/conn")

const Task = require('./models/Tasks')

const tasksRoutes = require('./routes/tasksRoutes')


const newEngine = handlebars.create([
    {partialsDir:'views/partials'}
])

app.engine('handlebars', newEngine.engine)
app.set('view engine','handlebars')
app.set('views','./views')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('public'))

app.use('/tasks', tasksRoutes)

conn.sync()
.then(()=>{
    app.listen(port,()=>{
        console.log('rodando')
    })
})
.catch((err)=>{
    console.log(`ERROR - ${err}`)
})


