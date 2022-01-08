const bcrypt = require('bcryptjs')
const { BCRYPT_ROUNDS } = require('../config')
const { tokenBuilder } = require('./auth-helpers')

const router = require('express').Router()

const User = require('../users/users-model')

const { validateRegister, validateLogin, restricted, only } = require('./auth-middleware')

router.post('/register', validateRegister, (req, res, next) => {

    User.register({
        ...req.body,
        password: bcrypt.hashSync(req.body.password, parseInt(BCRYPT_ROUNDS))
        })
        .then(user => {
            res.status(201).json({ message: `You have successfully created a new account with username '${user.username}'`})
        })
        .catch(next)
})


router.post('/login', validateLogin, (req, res, next) => {
    if (bcrypt.compareSync(req.body.password, req.user.password)) {
        const token = tokenBuilder(req.user)
        res.status(200).json({
            message: `Welcome back, ${req.user.username}`,
            token
        })
    } else {
        next({ status: 401, message: 'invalid credentials' })
    }
})

router.get('/:username', restricted, (req, res, next) => {
    res.json('workin on it')

    // User.getUser()
    //     .then()
    //     .catch()
})




// stub for admin endpoints

// router.get("/:user_id", restricted, only('admin'), (req, res, next) => { // done for you
//     res.json('passed through only endpoint')
//   });


router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    })
})


module.exports = router