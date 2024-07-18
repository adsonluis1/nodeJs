const conn = require('../db/conn')
const {ObjectId} = require('mongodb')

module.exports = class Product {
    constructor(name, price, description){
        this.name = name
        this.price = price
        this.description = description
    }

    static  showProducts (){
        const products = conn.db().collection('products').find().toArray()
       return products
    }

    static async showProductById (productId){
        const product = await conn.db().collection('products').findOne({_id:new ObjectId(productId)})
        return product
    }

    static async delete(productId){
        await conn.db().collection('products').deleteOne({_id:new ObjectId(productId)})
    }

    async edit(productId){
        await conn.db().collection('products').updateOne({_id:new ObjectId(productId)}, {$set:{
            name:this.name,
            price:this.price,
            description:this.description 
        }})
    }

    async save(){
        const product = await conn.db().collection('products').insertOne({
            name:this.name,
            price:this.price,
            description:this.description
        })
        console.log('salvo com sucesso')
        return product
    }

    
}