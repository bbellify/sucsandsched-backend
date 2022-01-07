const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config')

function tokenBuilder(user) {
  const payload = {
    subject: user.user_id,
    username: user.username,
    role: user.role,
  }
  const options = {
    expiresIn: '3d'
  }
  const result = jwt.sign(payload, JWT_SECRET, options)

  return result
}


module.exports = {
  tokenBuilder,
}
