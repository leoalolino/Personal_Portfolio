const express = require('express')
const crud = express.Router()
const labelRoutes = require('./label')
const marquee = require('./marquee')

crud.use('/labels', labelRoutes)
crud.use('/marquees', marquee)
module.exports = crud