const userRouter = require('express').Router()

const userController = require('../controllers/user.controller')

userRouter.get('/', userController.getUsers)
userRouter.get('/:id', userController.getUserById)
userRouter.patch('/:id', userController.editUser)
userRouter.delete('/:id', userController.deleteUser)

module.exports = userRouter