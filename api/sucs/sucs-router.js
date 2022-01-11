const router = require('express').Router()

const Sucs = require('../sucs/sucs-model')

const { restricted } = require('../account/account-middleware')
const { ifSucs } = require('./sucs-middleware')

//could add the line below and then remove restricted middleware from all endpoints if I didn't want to keep the open endpoint for non-logged in user. maybe this can be refactored (put in auth router instead? that isn't locked) in order to clean this router up

// router.use(restricted)
// I think above line is right, would have to double check

router.get('/', (req, res, next) => {
    Sucs.getSucs()
        .then(sucs => {
            res.json(sucs)
        })
        .catch(next)
})

// add ifSucs middleware
router.get('/user', restricted, ifSucs, (req, res, next) => {
  Sucs.getSucsByUsername(req.decodedJwt.username)
      .then(sucs => {
        res.json({
          username: req.decodedJwt.username,
          sucs: sucs
        })
      })
      .catch(next)
})

router.get('/all', restricted, (req, res, next) => {
  console.log('in all')
  res.json({ message: 'all sucs'})
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