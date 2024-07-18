const express = require('express')
const router = express.Router()
const ProdutosControllers = require('../controllers/ProdutosControllers')

router.get('/create', ProdutosControllers.formCreate)
router.get('/delete/:id', ProdutosControllers.productsDelete)
router.get('/edit/:id', ProdutosControllers.formEdit)
router.post('/edit/:id', ProdutosControllers.productsEdit)
router.post('/create', ProdutosControllers.productsCreate)

module.exports = router