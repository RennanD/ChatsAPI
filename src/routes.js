const routes = require('express').Router()

routes.get('/', (req,res) => {
    res.send('Hello es6')
})

module.exports = routes