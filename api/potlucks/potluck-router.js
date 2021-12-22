const router = require('express').Router()

const Potluck = require('./potluck-model')

const { validateNewPotluck, validatePotluckUpdate } = require('./potluck-middleware')

router.get('/', (req, res, next) => {
    Potluck.getPotlucks()
        .then(ps => {
            res.json(ps)
        })
        .catch(next)
})

//create new potluck
router.post('/', validateNewPotluck, (req, res, next) => {
  Potluck.create(req.headers.user_id, req.body)
    .then(([newP]) => {
      res.status(201).json({newP, message: 'test test'})
    })
    .catch(next)
})

//get potluck by id
router.get('/:id', (req, res, next) => {
  Potluck.getPotluckById(req.params.id)
    .then(p => {
      res.json(p)
    })
    .catch(next)
})

//update potluck by id
router.put('/:id', validatePotluckUpdate, (req, res, next) => {
  Potluck.editPotluck(req.params.id, req.body)
    .then(edited => {
      res.json(edited)
    })
    .catch(next)
})

// adds item to potluck
router.post('/:id/items', (req, res, next) => {
  Potluck.addItem(req.body, req.params.id)
    .then(([added]) => {
      res.status(201).json(added)
    })
    .catch(next)
})

// get potluck guests by id
router.get('/:id/guests', (req, res, next) => {
  Potluck.getGuests(req.params.id)
    .then(guests => {
      res.json(guests)
    })
    .catch(next)
})

// invite user to potluck guest list
router.post('/:id/guests', (req, res, next) => {
  Potluck.addGuest(req.params.id, req.body.username)
    .then(guests => {
      res.json(guests)
    })
    .catch(next)
})

// get food list for potluck by id
router.get('/:id/items', (req, res, next) => {
  Potluck.getItems(req.params.id)
    .then(items => {
      res.json(items)
    })
    .catch(next)
})

// allows a user to confirm as guest
router.put('/:id/guests', (req, res, next) => {
  Potluck.confirm(req.headers.user_id, req.params.id)
    .then(conf => {
      if (conf) {
        res.json({ message: 'You have successfully RSVPd!'})
      } else {
        next({ status: 400, message: 'something went wrong with rsvp' })
    }})
    .catch(next)
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    })
  })

module.exports = router