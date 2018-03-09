var Sequelize = require('sequelize')

var sequelize = require('../config/connection')

var Burger = sequelize.define("burgers", {
    burger_name: {
        type: Sequelize.STRING,
        validate: {
            is: ["^[a-z]+$",'i'],
            allowNull: false,
            len: [1, 100],
        }
    },

    devoured: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
}, {
    timestamps: false
})

Burger.sync()

module.exports = Burger