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

async function toggleSucs(username) {
    try {
        await db('sucs').select(`${username}`)
        
        await db.schema.alterTable('sucs', table => {
        table.dropColumn(`${username}`)
        })

        // insert changing does_sucs to true here

        return (`no longer tracking sucs for ${username}`)

    } catch {
        await db.schema.alterTable(`sucs`, table => {
            table.string(`${username}`)
        })

        return (`now tracking sucs for ${username}`)
    }
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
    toggleSucs,
    logSucs,
}