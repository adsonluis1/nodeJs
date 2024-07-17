const conn = require('../db/conn')

module.exports = class Product {
    constructor(name, price, description){
        this.name = name
        this.price = price
        this.description = description
    }

    static showProducts (){
        const products = conn.db().collection('products').find().toArray()
       return products
    }

    save(){
        const product = conn.db().collection('products').insertOne({
            name:this.name,
            price:this.price,
            description:this.description
        })
        console.log('salvo com sucesso')
        return product
    }

    
}