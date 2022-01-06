const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

// import routers here
// const authRouter = require('./auth/auth-router')
// const potluckRouter = require('./potlucks/potluck-router')


const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

// use routers go here
// server.use('/api/auth', authRouter)
// server.use('/api/potlucks', potluckRouter)

// server.get('/api/users', async (req, res) => {
//   res.json(await getAllUsers())
// })

server.get('/', (req, res) => {
  res.json({ sucs: 'engage' })
})

module.exports = server
