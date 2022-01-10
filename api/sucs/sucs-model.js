const db = require('../data/db-config')

function getSucs() {
    return db('sucs')
    .select('sucs_id', 'situps', 'crunches', 'squats' )
}

function getSucsRestricted() {
    return db('sucs')
    .select('*')
}

module.exports = {
    getSucs,
    getSucsRestricted
}