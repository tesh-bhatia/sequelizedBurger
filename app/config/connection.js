//change this depending on dev/production
var config = require('./config')

var Sequelize = require("sequelize")

var sequelize

if(process.env.JAWSDB_URL){
    //use production settings if connected to heroku
    sequelize = new Sequelize(config.production)
}else{
    //use dev settings if running locally
    sequelize = new Sequelize (config.development.database, config.development.username, config.development.password, config.development)
}

module.exports = sequelize