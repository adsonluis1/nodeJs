const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const conn = require('./db/conn')
const routerTasks = require('./routes/routesTasks')
const Task = require('./models/Tasks')
const newEngine = handlebars.create([
    {partialsDir:'views/partials'}
])

app.engine('handlebars', newEngine.engine)
app.set('view engine', 'handlebars')
app.set('views', './views')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('public'))
app.use('/tasks',routerTasks)

app.get('/', async (req, res)=>{
    const tasks = await Task.findAll({raw:true})

    tasks.map((task,indice,array)=>{
        if(task.done == 0){
            task.done = false
        }else{
            task.done = true
        }
    })

    res.render('home', {tasks})
})


conn.sync()
.then(()=>{
    app.listen(3333)
})
.catch((err)=>{
    console.log(`ERROR - ${err}`)
})