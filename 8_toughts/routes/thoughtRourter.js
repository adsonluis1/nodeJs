const express = require('express')
const router = express.Router()
const {checkAuth} = require('../helpers/donepage')
const ThoughtControllers = require('../controllers/ThoughtControllers')

router.use((req,res,next) => {

    if(req.session.account){
        res.locals.session = req.session
    }

    next()
})


router.get('/add',checkAuth, ThoughtControllers.createFormThought)
router.get('/delete/:id', checkAuth, ThoughtControllers.deleteThought)
router.get('/edit/:id', checkAuth, ThoughtControllers.editFormThought)
router.post('/seartch', ThoughtControllers.showFilterThought)
router.post('/edit', checkAuth, ThoughtControllers.editThought)
router.post('/add', checkAuth, ThoughtControllers.addThought)

module.exports = router