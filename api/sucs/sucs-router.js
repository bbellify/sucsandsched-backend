const router = require('express').Router()

const Sucs = require('../sucs/sucs-model')

const { restricted } = require('../account/account-middleware')

router.get('/', (req, res, next) => {
  Sucs.getSucs()
      .then(sucs => {
          res.json(sucs)
      })
      .catch(next)
})

router.get('/all', restricted, (req, res, next) => {
  
  // added this when working on sucs component, feel like I'll need here but can't remember why
  console.log(req.decodedJwt)
  
  Sucs.getSucsRestricted()
      .then(sucs => {
          res.json(sucs)
      })
      .catch(next)
})

router.post('/log', restricted, (req, res, next) => {
  Sucs.logSucs(req.decodedJwt.username, req.body.day)
    .then( newSucs => {
      res.status(200).json(newSucs)
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