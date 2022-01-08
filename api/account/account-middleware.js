const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config')
// const User = require('../config')

const restricted = (req, res, next) => {
    const token = req.headers.authorization
    if(!token) {
      return next({ status: 401, message: 'Token required!'})
    }
    jwt.verify(token, JWT_SECRET, (err, decoded)=> {
      if (err) {
        return next({ status: 401, message: 'Token invalid'})
      }
      req.decodedJwt = decoded
      next()
    })
}

const only = role_name => (req, res, next) => {
    if (req.decodedJwt.role_name === role_name) {
      next()
    } else {
      next({ status: 403, message: 'This is not for you' })
    }
}

module.exports = {
    restricted,
    only,
}