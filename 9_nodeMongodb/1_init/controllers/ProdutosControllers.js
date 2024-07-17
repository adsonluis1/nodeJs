const Produtos = require('../models/produtos')

module.exports = class ProdutosControllers {
    static showProducts (req, res){
        res.render('produtos/showProdutos')
    }

    static formCreate (req, res){
        res.render('produtos/formCreate')
    }

    static productsCreate (req, res){
        const {name, price, description} = req.body
        const produto = new Produtos(name,price,description)

        produto.save()
        res.redirect('/')
    }
}