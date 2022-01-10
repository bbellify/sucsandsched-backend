const router = require('express').Router()

const Sucs = require('../sucs/sucs-model')

const { restricted, only } = require('../account/account-middleware')

router.get('/', (req, res, next) => {
  Sucs.getSucs()
      .then(sucs => {
          res.json(sucs)
      })
      .catch(next)
})

router.get('/all', restricted, (req, res, next) => {
  Sucs.getSucsRestricted()
      .then(sucs => {
          res.json(sucs)
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