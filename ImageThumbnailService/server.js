// Importing required modules
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import winston from './config/winston'

// Defining port
const port = process.env.PORT || 9003

// Defining app
const app = express()

// Defining middlewares
app.use(morgan('combined', { stream: winston.stream }))
app.use(bodyParser.json())
app.use(cors())

// Defining the Routes
require('./routes/index')(app)

// Listening to port
app.listen(port)
console.log('Image Thumbnail Service Running On:' + ' ' + 'http://localhost:' + port)

module.exports = app
