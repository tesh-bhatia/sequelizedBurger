const Burger = require('../models/burger')

module.exports = (app) => {
    app.get('api/all', (req, res) =>{
        Burger.findAll({})
            .then((result =>{
                console.log(`Found items: ${result}`)
            }))
    })
}