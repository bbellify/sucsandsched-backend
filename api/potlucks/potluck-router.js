const router = require('express').Router()

const Potluck = require('./potluck-model')


router.get('/', (req, res, next) => {
    Potluck.getPotlucks()
        .then(ps => {
            res.json(ps)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
  res.json({ post: 'being built' })
})

router.get('/:id', (req, res, next) => {
  res.json({ potluck: 'info coming' })
})

router.put('/:id', (req, res, next) => {
  res.json({ update: 'being built' })
})

router.get(':id/guests', (req, res, next) => {
  res.json({ guest_list: 'list being built' })
})

router.get(':id/items', (req, res, next) => {
  res.json( { item_list: 'being built'})
})



router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    })
  })

module.exports = router