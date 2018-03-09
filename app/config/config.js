require('dotenv').config({path:'../../.env'})

var configs = {
  "development": {
    "username": "root",
    "password": process.env.LOCAL_PASSWORD,
    "database": "burgers_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": process.env.JAWSDB_URL
}

module.exports = configs

