const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const db = require('./data/db-config')

const authRouter = require('./auth/auth-router')
const potluckRouter = require('./potlucks/potluck-router')


const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/auth', authRouter)
server.use('/api/potlucks', potluckRouter)

// server.get('/api/users', async (req, res) => {
//   res.json(await getAllUsers())
// })

server.get('/', (req, res) => {
  res.json({ api: 'up' })
})

module.exports = server
