const db = require('../data/db-config')

function getPotlucks() {
    return db('potlucks as p')
        .join('users as u', 'p.organizer', 'u.user_id')
        
        // .join() this is for getting guests
        .select('p.*', 'u.username')
}

//on put for a editing a potluck, use the jwtdecoded object on the req
function getPotluckById(id) {
    
}

async function addPotluck(potluck) {

}

async function editPotluck(potluck) {

}

async function addGuest(potluck) {

}




module.exports = {
    getPotlucks,
    addPotluck,
    editPotluck,
    addGuest,

}