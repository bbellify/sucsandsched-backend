const db = require("../../api/data/db-config")
const User = require('../users/users-model')

const validateRegister = async (req, res, next) => {
    const { username, password } = req.body
    if (!username || !password ) {
        next({ status: 400, message: 'username and password required' })
    } else {
        User.getByUsername(username)
            .then(user => {
                if (user) {
                    next({ status: 400, message: 'username taken!'})
                } next()
            })
            .catch(next)
    }
}


const validateLogin = async (req, res, next) => {
    User.getByUsername(req.body.username)
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

module.exports = {
    validateRegister,
    validateLogin
}