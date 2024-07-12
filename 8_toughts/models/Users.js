const {DataTypes} = require('sequelize')
const conn = require('../db/conn')

const Users = conn.define('users',{
    email:{
        type:DataTypes.STRING,
        require:true
    },
    nome:{
        type:DataTypes.STRING,
        require:true
    },
    senha:{
        type:DataTypes.STRING,
        require:true
    }
})

module.exports = Users