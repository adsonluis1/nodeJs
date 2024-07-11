const { Sequelize } = require("sequelize")
const sequelize = new Sequelize('nodenvc','root','',{
    host:'localhost',
    dialect:'mysql'
})

try {
    sequelize.authenticate()
    console.log('banco encontrado')
} catch (error) {
    console.log(`ERROR - ${error}`)
}

module.exports = sequelize