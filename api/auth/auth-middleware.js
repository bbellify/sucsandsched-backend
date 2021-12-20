const db = require("../../api/data/db-config")

const validateRegister = async (req, res, next) => {
    const { username, password } = req.body
    if (!username || !password ) {
        next({ status: 400, message: 'username and password required' })
    } else {
        const isTaken = await db('users').where('username', username).first()
        if (isTaken) {
            next({ status: 400, message: 'username taken!'})
        } next()
    }
}

module.exports = {
    validateRegister
}