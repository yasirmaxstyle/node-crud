const { constants: http } = require('http2')
const userModels = require('../models/user.models')

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @returns 
 */
exports.register = function (req, res) {
  const { email, password, confirmPassword } = req.body

  if (userModels.getUserByEmail(email) !== undefined) {
    return res.status(http.HTTP_STATUS_BAD_REQUEST).json({
      success: false,
      message: "email already exists!"
    })
  }

  if (password !== confirmPassword) {
    return res.status(http.HTTP_STATUS_BAD_REQUEST).json({
      success: false,
      message: "confirm password do not match"
    })
  }

  const allUsers = userModels.getAllUsers()
  const newUser = {
    id: allUsers.length + 1,
    email,
    password
  }

  userModels.createUser(newUser)

  console.log(allUsers)

  return res.status(http.HTTP_STATUS_CREATED).json({
    success: true,
    message: 'register success!',
    users: newUser
  })
}


/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @returns 
 */
exports.login = function (req, res) {
  const { email, password } = req.body

  const user = userModels.getUserByEmail(email)
  if (user === undefined) {
    return res.status(http.HTTP_STATUS_BAD_REQUEST).json({
      success: false,
      message: "email is not registered!"
    })
  }

  if (password !== user.password) {
    return res.status(http.HTTP_STATUS_BAD_REQUEST).json({
      success: false,
      message: "password is wrong!"
    })
  }

  return res.status(http.HTTP_STATUS_UNAUTHORIZED).json({
    success: true,
    message: 'login success!'
  })
}