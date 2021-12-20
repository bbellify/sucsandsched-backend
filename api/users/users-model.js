const db = require('../data/db-config')


async function register(user) {
    const [newUser] = await db('users')
        .insert(user, ['user_id', 'username', 'password'])
    return newUser
}

module.exports = {
    register
}