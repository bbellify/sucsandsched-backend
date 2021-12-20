const db = require('../data/db-config')


function getByUsername(username) {
    return db('users')
        .where('username', username)
        .first()
}

async function register(user) {
    const [newUser] = await db('users')
        .insert(user, ['user_id', 'username', 'password'])
    return newUser
}



module.exports = {
    register,
    getByUsername
}