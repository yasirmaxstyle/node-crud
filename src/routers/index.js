const routers = require('express').Router()

routers.use('/auth', require('./auth'))

module.exports = routers