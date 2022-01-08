const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

// import routers here
const sucsRouter = require('./sucs/sucs-router')
const authRouter = require('./auth/auth-router')
const accountRouter = require('./account/account-router')

const server = express()
server.use(helmet())
server.use(cors())
server.use(express.json())

// use routers go here
server.use('/api/sucs', sucsRouter)
server.use('/auth', authRouter)
server.use('/api/account', accountRouter)

server.get('/', (req, res) => {
  console.log(req.headers)
  res.json({ sucs: 'engage' })
})

module.exports = server
