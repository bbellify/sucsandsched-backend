const db = require('../data/db-config')

function validateNewPotluck(req, res, next) {
    const { potluck_name, date, time, location, organizer } = req.body

    if (!potluck_name || typeof potluck_name !== 'string') {
        next({ status: 400, message: 'potluck_name is required, must be string' })
    } else if (!date || typeof date !== 'string') {
        next({ status: 400, message: 'date is required, must be string' })
    } else if (!time || typeof time !== 'string') {
        next({ status: 400, message: 'time is required, must be string' })
    } else if (!location || typeof location !== 'string') {
        next({ status: 400, message: 'location is required, must be string' })
    } else if (!organizer || typeof organizer !== 'number') {
        next({ status: 400, message: 'organizer (organizer_id) is required' })
    } else {
        next()
    }
}



module.exports = {
    validateNewPotluck
}