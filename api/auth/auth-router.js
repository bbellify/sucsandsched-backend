const bcrypt = require('bcryptjs')
const { BCRYPT_ROUNDS } = require('../config')
const { tokenBuilder } = require('./auth-helpers')

const router = require('express').Router()

const User = require('../users/users-model')

const { validateRegister, validateLogin } = require('./auth-middleware')

router.post('/register', validateRegister, (req, res, next) => {

    User.register({
        ...req.body,
        password: bcrypt.hashSync(req.body.password, parseInt(BCRYPT_ROUNDS))
        })
        .then(user => {
            res.status(201).json({ 
                username: user.username,
                first_name: user.first_name
            })
        })
        .catch(next)
})

router.post('/login', validateLogin, (req, res, next) => {
    if (bcrypt.compareSync(req.body.password, req.user.password)) {
        const token = tokenBuilder(req.user)
        res.status(200).json({
            username: req.user.username,
            first_name: req.user.first_name,
            token
        })
    } else {
        next({ status: 401, message: 'invalid credentials' })
    }
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    })
})


module.exports = router