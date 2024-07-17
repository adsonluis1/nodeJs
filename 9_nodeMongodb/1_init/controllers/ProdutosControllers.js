const Produtos = require('../models/produtos')

module.exports = class ProdutosControllers {
    static async showProducts (req, res){
        const products = await Produtos.showProducts()
        res.render('produtos/showProdutos', {products})
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