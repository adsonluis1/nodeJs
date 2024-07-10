const Task = require('../models/Tasks')

module.exports = class TaskController {
    static createTask(req,res){
        res.render('tasks/create')
    }

    static showTask(req,res){
        res.render('tasks/showTasks')
    }
}