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

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @returns 
 */
exports.getUsers = function (req, res) {
  const { search, page, limit } = req.query
  const users = userModels.getAllUsers(search)

  const TOTAL = users.length
  const LIMIT = limit || 3
  const OFFSET = (page - 1) * LIMIT || 0
  const totalPage = Math.floor((TOTAL + LIMIT - 1) / LIMIT)

  return res.status(http.HTTP_STATUS_OK).json({
    success: true,
    message: 'data retrieved successfully!',
    total: TOTAL,
    limit: LIMIT,
    totalPage,
    results: users.slice(OFFSET, LIMIT + OFFSET)
  })
}

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @returns 
 */
exports.getUserById = function (req, res) {
  const { id } = req.params

  const user = userModels.getUserById(parseInt(id))

  return res.status(http.HTTP_STATUS_OK).json({
    success: true,
    message: 'data retrieved successfully!',
    data: user
  })
}