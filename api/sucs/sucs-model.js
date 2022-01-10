const db = require('../data/db-config')

function getSucs() {
    return db('sucs')
    .select('sucs_id', 'situps', 'crunches', 'squats')
    .orderBy('sucs_id', 'asc')
}

// should this return only the users? or all?
function getSucsRestricted() {
    return db('sucs')
    .select('*')
    .orderBy('sucs_id', 'asc')
}

async function logSucs(username, day) {

    await db('sucs as s')
        .where('s.sucs_id', day)
        .update(username, true, ['sucs_id', 'situps', 'crunches', 'squats', `${username}`])

    return getSucsRestricted()
}

module.exports = {
    getSucs,
    getSucsRestricted,
    logSucs,
}