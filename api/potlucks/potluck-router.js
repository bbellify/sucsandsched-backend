const router = require('express').Router()

const Potluck = require('./potluck-model')


router.get('/', (req, res, next) => {
    Potluck.getPotlucks()
        .then(ps => {
            res.json(ps)
        })
        .catch(next)
})

//create new potluck
router.post('/', (req, res, next) => {
  res.json({ post: 'being built' })
})

//get potluck by id
router.get('/:id', (req, res, next) => {
  res.json({ potluck: 'info coming' })
})

//update potluck by id
router.put('/:id', (req, res, next) => {
  res.json({ update: 'being built' })
})

// adds item to potluck
router.post(':id/items', (req, res, next) => {
  res.json({ item_list: 'adds an item to a potluck' })
})

// get potluck guests by id
router.get(':id/guests', (req, res, next) => {
  res.json({ guest_list: 'list being built' })
})

// get food list for potluck by id
router.get(':id/items', (req, res, next) => {
  res.json( { item_list: 'being built'})
})


// need an endpoint for adding a guest (or self) to a potluck


router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    })
  })

module.exports = router