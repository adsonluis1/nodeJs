const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TasksController')

router.get('/add',TaskController.createTask)
router.get('/', TaskController.showTask)

module.exports = router