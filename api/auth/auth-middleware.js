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
                } else next()
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

module.exports = {
    validateRegister,
    validateLogin,
}