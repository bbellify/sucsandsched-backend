const router = require('express').Router()

const Potluck = require('./potluck-model')


router.get('/', (req, res, next) => {
    Potluck.getPotlucks()
        .then(ps => {
            res.json(ps)
        })
        .catch(next)
})


router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    })
  })

module.exports = router