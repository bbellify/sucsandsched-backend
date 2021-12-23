function validateNewPotluck(req, res, next) {
    const { date, time, location } = req.body

   if (!date || typeof date !== 'string') {
        next({ status: 400, message: 'date is required, must be string' })
    } else if (!time || typeof time !== 'string') {
        next({ status: 400, message: 'time is required, must be string' })
    } else if (!location || typeof location !== 'string') {
        next({ status: 400, message: 'location is required, must be string' })
    } else {
        next()
    }
}

function validatePotluckUpdate(req, res, next) {
    const { date, time, location } = req.body
    if (!date && !time && !location) {
        next({ status: 400, message: 'organizer can update date, time, and location fields '})
    } else {
        next()
    }
}

module.exports = {
    validateNewPotluck,
    validatePotluckUpdate
}