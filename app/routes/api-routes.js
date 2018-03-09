const Burger = require('../models/burger')

module.exports = (app) => {
    console.log('Running...')
    app.get('/api/all', (req, res) =>{
        Burger.findAll({})
            .then((result =>{
                res.json(result)
            }))
    })

    app.post('/' , (req, res) => {
        Burger.create({
            burger_name: req.body.burger_name,
        })
    })

    app.put('/', (req, res) => {
        Burger.update({
            devoured: true
        },{
        where: {
            id: req.body.id
        }})
    })
}
