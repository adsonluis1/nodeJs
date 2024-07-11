const {DataTypes} = require('sequelize')
const db = require('../db/conn')

const Task = db.define('task',{
    title: {
        type:DataTypes.STRING,
        require:true
    },
    description: {
        type:DataTypes.STRING,
        require:true
    },
    done: {
        type:DataTypes.BOOLEAN,
        require:true
    }
})

module.exports = Task
