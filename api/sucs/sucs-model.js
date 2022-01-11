const db = require('../data/db-config')

function getSucs() {
    return db('sucs')
    .select('sucs_id', 'situps', 'crunches', 'squats')
    .orderBy('sucs_id', 'asc')
}


function getSucsByUsername(username) {
    return db('sucs')
    .select('sucs_id', 'situps', 'crunches', 'squats', `${username}`)
    .orderBy('sucs_id', 'asc')
}

async function logSucs(username, day) {

    await db('sucs as s')
        .where('s.sucs_id', day)
        .update(username, true, ['sucs_id', 'situps', 'crunches', 'squats', `${username}`])

    return getSucsByUsername(username)
}

module.exports = {
    getSucs,
    getSucsByUsername,
    logSucs,
}