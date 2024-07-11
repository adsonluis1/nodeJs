const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TasksController')

router.get('/add', TaskController.createTask)
router.post('/add', TaskController.pushTask)
router.post('/edit', TaskController.editTask)
router.get('/delete/:id', TaskController.deleteTask)

module.exports = router