const router = require('express').Router()

const Sucs = require('../sucs/sucs-model')

router.get('/', (req, res, next) => {
    Sucs.getSucs()
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