const routers = require('express').Router()

routers.use('/auth', require('./auth'))
routers.use('/user', require('./user'))

module.exports = routers