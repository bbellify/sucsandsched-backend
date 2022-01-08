const db = require('../data/db-config')


function findByUsername(username) {
    //for login 
    return db('users')
        .where('username', username)
        .first()
}

function getByUsername(username) {
    // after log in
    return db('users')
        .where('username', username)    
        .join('')
}

async function register(user) {
    const [newUser] = await db('users')
        .insert(user, ['user_id', 'username', 'password'])
    return newUser
}

module.exports = {
    register,
    findByUsername,
    getByUsername,
}

// pg notes - can pass a <RETURNING ARRAY> as 2nd argument to knex.insert/update to get inserted information back - see register for example
