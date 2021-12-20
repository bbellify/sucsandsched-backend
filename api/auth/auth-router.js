const bcrypt = require('bcryptjs')
// const { tokenBuilder } = require('./auth-helpers')
const router = require('express').Router()

const { validateRegister } = require('./auth-middleware')


router.post('/register', validateRegister, (req, res, next) => {
    
})


router.post('/login', (req, res, next) => {

})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    })
  })


module.exports = router