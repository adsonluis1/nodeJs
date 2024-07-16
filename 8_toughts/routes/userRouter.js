const express = require('express')
const router = express.Router()
const checkAuth = require('../helpers/donepage').checkAuth
const UsersControlls = require('../controllers/UsersControlls')

router.use((req,res,next) => {

    if(req.session.account){
        res.locals.session = req.session
    }

    next()
})

router.get('/register',UsersControlls.formCreateAccount)
router.get('/login', UsersControlls.formLoginAccount)
router.get('/logout', UsersControlls.logoutAccount)
router.get('/dashbord', checkAuth, UsersControlls.dashbord)
router.post('/register', UsersControlls.createAccount)
router.post('/login', UsersControlls.loginAccount)

module.exports = router