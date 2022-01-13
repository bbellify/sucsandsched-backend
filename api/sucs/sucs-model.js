const { default: knex } = require('knex')
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

// beginning of trying to toggle sucs for a user - turns out this is probably going to require a refactor with some inbetween tables since adding a column to a database is apparently impossible without a migration. will require refactoring front end also.. fuck

// async function toggleSucs(username) {
    
//     try {
//         await db('sucs').column('admin')
//         await knex.schema.table('sucs', table => {
//             table.string('admin')
//         })
//         return await db('sucs').where('sucs_id', 1)
//     } catch {
//         console.log('catch')
    // }
    
    // const [sucs] = await db('sucs').select('*').where('sucs_id', 1)
    // console.log(sucs)
    // let columns = []
    // for (let p in sucs) {
    //     if( p !== 'sucs_id' && p !== 'situps' && p !== 'crunches' && p !== 'squats') {
    //         columns.push(p)
    //     }
    // }


// }

async function logSucs(username, day) {

    await db('sucs as s')
        .where('s.sucs_id', day)
        .update(username, true, ['sucs_id', 'situps', 'crunches', 'squats', `${username}`])

    return getSucsByUsername(username)
}

module.exports = {
    getSucs,
    getSucsByUsername,
    // toggleSucs,
    logSucs,
}