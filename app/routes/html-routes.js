const Burger = require('../models/burger')

module.exports = (app) => {
    app.get('/', (req, res) => {
        Burger.findAll({})
            .then((result) =>{
                res.render('index', {burgers: result})
            })
    })
}