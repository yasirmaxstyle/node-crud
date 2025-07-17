const userRouter = require('express').Router()
const path = require("node:path")
const multer = require("multer")
const { v4: uuid } = require("uuid")

const userController = require('../controllers/user.controller')
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join("uploads", "profile-picture"))
  },
  filename: (req, file, cb) => {
    const filename = file.originalname;
    const ext = filename.split(".")[1]
    const savedFile = `${uuid()}.${ext}`
    cb(null, savedFile)
  }
})
const profilePicture = multer({ storage })

userRouter.get('/', userController.getUsers)
userRouter.get('/:id', userController.getUserById)
userRouter.post('/', profilePicture.single("picture"), userController.createUser)
userRouter.patch('/:id', userController.editUser)
userRouter.delete('/:id', userController.deleteUser)

module.exports = userRouter