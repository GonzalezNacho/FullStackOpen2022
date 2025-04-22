const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const blogsRouter = require('./controllers/blogs')
const { MONGODB_URI } = require('./utils/config')
const { requestLogger, unknownEndpoint, errorHandler } = require('./utils/middleware')

mongoose.set('strictQuery', false)

console.info('connecting to', MONGODB_URI)

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.info('connected to MongoDB')
  })
  .catch((error) => {
    console.error('error connecting to MongoDB:', error.message)
  })


app.use(cors())
app.use(express.json())
app.use(requestLogger)

app.use('/api/blogs', blogsRouter)

app.use(unknownEndpoint)
app.use(errorHandler)

module.exports = app
