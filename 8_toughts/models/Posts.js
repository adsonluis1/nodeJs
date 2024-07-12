const {DataTypes} = require('sequelize')
const conn = require('../db/conn')

const Posts = conn.define ('posts',{
    title:{
        type:DataTypes.STRING,
        require:true
    },
    user:{
        type:DataTypes.JSON,
        require:true
    }
})

module.exports = Posts