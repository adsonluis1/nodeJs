const expres = require('express')
const router = expres.Router()
const UsersControlls = require('../controllers/UsersControlls')

router.get('/register', UsersControlls.formCreateAccount)
router.get('/login', UsersControlls.formLoginAccount)
router.post('/create', UsersControlls.createAccount)
router.post('/login', UsersControlls.loginAccount)

module.exports = router