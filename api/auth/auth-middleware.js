const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config')
const User = require('../users/users-model')

const validateRegister = async (req, res, next) => {
    const { username, password, first_name } = req.body
    if (!username || !password || !first_name) {
        next({ status: 400, message: 'username, first_name, and password all required' })
    } else {
        User.findByUsername(username)
            .then(user => {
                if (user) {
                    next({ status: 400, message: 'username taken!'})
                } next()
            })
            .catch(next)
    }
}

const validateLogin = async (req, res, next) => {
    User.findByUsername(req.body.username)
        .then(user => {
            if (!user) {
                next({ status: 401, message: 'invalid credentials' })
            } else {
                req.user = user
                next()
            }
        })
        .catch(next)
}

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
    validateRegister,
    validateLogin,
    restricted,
    only,
}