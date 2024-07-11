const {Sequelize} = require('sequelize')
const sequelize = new Sequelize('nodenvc','root','',{
    host:'localhost',
    dialect:'mysql'
})

module.exports = sequelize