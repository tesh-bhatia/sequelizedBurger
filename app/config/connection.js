//change this depending on dev/production
var config = require('./config').development

var Sequelize = require("sequelize")

var sequelize = new Sequelize (config.database, config.username, config.password, config)

module.exports = sequelize