const conn = require('../db/conn')

module.exports = class Product {
    constructor(name, price, description){
        this.name = name
        this.price = price
        this.description = description
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