const { constants: http } = require('http2')
const userModels = require('../models/user.models')

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @returns 
 */
exports.editUser = function (req, res) {
  const { id } = req.params

  userModels.updateUser(parseInt(id), req.body)

  return res.status(http.HTTP_STATUS_OK).json({
    success: true,
    message: 'user updated successfully!'
  })
}


/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @returns 
 */
exports.deleteUser = function (req, res) {
  const { id } = req.params

  userModels.deleteUser(parseInt(id))

  return res.status(http.HTTP_STATUS_OK).json({
    success: true,
    message: 'user deleted successfully!'
  })
}

exports.getUsers = function (req, res) {
  const users = userModels.getAllUsers()

  return res.status(http.HTTP_STATUS_OK).json({
    success: true,
    message: 'data retrieved successfully!',
    data: users
  })
}

exports.getUserById = function (req, res) {
  const { id } = req.params

  const user = userModels.getUserById(parseInt(id))

  return res.status(http.HTTP_STATUS_OK).json({
    success: true,
    message: 'data retrieved successfully!',
    data: user
  })
}