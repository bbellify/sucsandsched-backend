const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

// import routers here
const sucsRouter = require('./sucs/sucs-router')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

// use routers go here
server.use('/api/sucs', sucsRouter)

// server.get('/api/users', async (req, res) => {
//   res.json(await getAllUsers())
// })

server.get('/', (req, res) => {
  res.json({ sucs: 'engage' })
})

module.exports = server
