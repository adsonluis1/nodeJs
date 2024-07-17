const express = require('express')
const router = express.Router()
const ProdutosControllers = require('../controllers/ProdutosControllers')

router.get('/create', ProdutosControllers.formCreate)
router.post('/create', ProdutosControllers.productsCreate)

module.exports = router