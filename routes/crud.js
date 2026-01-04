const express = require('express')
const crud = express.Router()
const labelRoutes = require('./labelRoute')
const marquee = require('./marqueeRoute')
const about = require('./aboutRoute')

crud.use('/labels', labelRoutes)
crud.use('/marquees', marquee)
crud.use('/about', about)
module.exports = crud