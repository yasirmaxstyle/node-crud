let users = []

exports.createUser = (user) => {
  users.push(user)
}

exports.getUserByEmail = (email) => {
  return users.find(user => user.email === email)
}

exports.getAllUsers = () => {
  return users
}

exports.getUserById = (id) => {
  return users.find(user => user.id === id)
}

exports.updateUser = (id, newData) => {
  let idx = users.findIndex(user => user.id === id)
  if (idx !== -1) {
    users[idx] = { ...users[idx], ...newData }
  }
}

exports.deleteUser = (id) => {
  let user = users.find(user => user.id === id)
  if (user) {
    users = users.filter(user => user.id !== id)
  }
}