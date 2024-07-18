const Produtos = require('../models/produtos')

module.exports = class ProdutosControllers {
    static async showProducts (req, res){
        const products = await Produtos.showProducts()
        res.render('produtos/showProdutos', {products})
    }

    static formCreate (req, res){
        res.render('produtos/formCreate')
    }
    
    static async formEdit (req, res){
        const {id} = req.params
        const product = await Produtos.showProductById(id)
        console.log(product)
        res.render('produtos/formEdit', {product})
    }

    static async productsDelete (req, res){
        const {id} = req.params

        await Produtos.delete(id)
        res.redirect('/')
    }

    static async productsEdit (req, res){
        const {id} = req.params
        const {name, price, description} = req.body

        const produto = new Produtos(name,price,description)

        await produto.edit(id)
        res.redirect('/')
    }

    static productsCreate (req, res){
        const {name, price, description} = req.body
        const produto = new Produtos(name,price,description)

        produto.save()
        res.redirect('/')
    }
}