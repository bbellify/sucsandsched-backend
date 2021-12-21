const db = require('../data/db-config')

function getPotlucks() {
    return db('potlucks as p')
        .join('users as u', 'p.organizer', 'u.user_id')
        .select('p.*', 'u.username')
}



module.exports = {
    getPotlucks
}