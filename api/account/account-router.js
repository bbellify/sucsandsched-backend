const router = require('express').Router()

const User = require('../users/users-model')

const { restricted, only } = require('./account-middleware')

router.get('/', restricted, (req, res, next) => {
    User.getByUsername(req.decodedJwt.username)
        .then(([user]) => {
            res.json(user)
        })
        .catch(next)
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