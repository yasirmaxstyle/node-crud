let users = []

exports.createUser = (user) => {
  users.push(user)
}

exports.getUserByEmail = (email) => {
  return users.find(user => user.email === email)
}

exports.getAllUsers = (search) => {
  if (search && search !== "") {
    return users.filter(user => user.email.toLowerCase().includes(search.toLowerCase()))
  }
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