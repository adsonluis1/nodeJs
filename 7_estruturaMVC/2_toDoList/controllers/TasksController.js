const Task = require('../models/Tasks')

module.exports = class TaskController {
    static createTask(req, res){
        res.render('tasks/formTask')
    }

    static async pushTask(req, res){
        const {title, description} = req.body
        const done = false
        const regEx = new RegExp(`!@#$%^&*()-_+=`)
        if(regEx.test(title)){
            return console.log('Title invalido')
        }else if(regEx.test(description)){
            return console.log('Description invalido')
        }
        await Task.create({title,description,done})
        res.redirect('/')
    }

    static async editTask(req,res){
        let {title, description,done,id} = req.body
        done = done == 'false'?true:false
        await Task.update({title,description,done},{where:{id:id}})
        res.redirect('/')
    }

    static async deleteTask(req,res){
        let {id} = req.params
        console.log('delete')
        await Task.destroy({where:{id:id}})
        res.redirect('/')
    }
}