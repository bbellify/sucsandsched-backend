const bcrypt = require('bcryptjs')
const { tokenBuilder } = require('./auth-helpers')
const router = require('express').Router()


const User = require('../users/users-model')

const { validateRegister, validateLogin } = require('./auth-middleware')

// would be nice to hide this in config file.. 
// const { BCRYPT_ROUNDS } = require('../config')


router.post('/register', (req, res, next) => {
    if (!req.body.username || !req.body.first_name || !req.body.password) {
        console.log(req.body)
        return next({ message: 'nah' })
    }

    let user = req.body
    const hash = bcrypt.hashSync(user.password, 8)
    user.password = hash
    
    User.register(user)
        .then(newUser => {
            res.status(201).json({ message: `You have successfully created a new account with username '${newUser.username}'`})
        })
        .catch(next)
})


router.post('/login', validateLogin, (req, res, next) => {
    const { password } = req.body
    if (bcrypt.compareSync(password, req.user.password)) {
        // const token = tokenBuilder(req.user)
        res.status(200).json({
            message: `Welcome back, ${req.user.username}`,
            // token,
            user_name: req.user.user_name
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