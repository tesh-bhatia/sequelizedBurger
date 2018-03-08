var Sequelize = require('sequelize')

var sequelize = require('../config/connection')

var Burger = sequelize.define("burgers", {
    title: Sequelize.STRING,
    author: Sequelize.STRING,
    genre: Sequelize.STRING,
    pages: Sequelize.INTEGER
}, {
    timestamps: false
})

Burger.sync()

module.exports = Burger