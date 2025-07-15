const users = []

exports.createUser = (user) => {
  users.push(user)
}

exports.getUserByEmail = (email) => {
  return users.find(user => user.email === email)
}

exports.getAllUsers = () => {
  return users
}