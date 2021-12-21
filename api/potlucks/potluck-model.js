const db = require('../data/db-config')

function getPotlucks() {
    
    return db('potlucks as p')
        .join('users as u', 'p.organizer', 'u.user_id')
        // another .join() for getting guests, items?
        .select('p.*', 'u.username')
}

//on put for a editing a potluck, use the jwtdecoded object on the req
function getPotluckById(id) {
    return db('potlucks as p')
    .join('users as u', 'p.organizer', 'u.user_id')
    // another .join() for getting guests, items?
    .select('p.*', 'u.username')
    .where('potluck_id', id)
    .first()
}

async function create(potluck) {
    return await db('potlucks as p')
        .insert(potluck, ['p.*'])
}

async function editPotluck(potluck) {

}

async function addGuest(potluck) {

}




module.exports = {
    getPotlucks,
    getPotluckById,
    create,
    editPotluck,
    addGuest,

}