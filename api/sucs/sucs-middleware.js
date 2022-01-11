const User = require('../users/users-model')
const Sucs = require('./sucs-model')

const ifSucs = async (req, res, next) => {
  const [user] = await User.getByUsername(req.decodedJwt.username)

  if (user.does_sucs) {
    return next()
  } else {
    res.json({
      sucs: await Sucs.getSucs(),
    })
  }
}

module.exports = {
  ifSucs,
}