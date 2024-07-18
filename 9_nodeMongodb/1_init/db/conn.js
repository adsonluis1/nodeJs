const { MongoClient } = require('mongodb')

const uri = "mongodb://localhost:27017/initmongodb"

const client = new MongoClient(uri)

async function run (){
    try {
        client.connect()
        console.log('mongodb conectado!!')

    } catch (error) {
        console.log(`Error ao conectar com o mongodb - ${error}` )
    }
}

run()

module.exports = client