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
        }).then(() => {
            res.status(200).end()
        })
    })

    app.put('/', (req, res) => {
        Burger.update({
            devoured: true
        },{
        where: {
            id: Number(req.body.id)
        }}).then((result) => {
            if (result.changedRows == 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        })

    })
}
