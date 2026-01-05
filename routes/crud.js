const express = require('express')
const crud = express.Router()
const labelRoutes = require('./labelRoute')
const marquee = require('./marqueeRoute')
const aboutRoute = require('./aboutRoute')

crud.use('/:dynamicTable', labelRoutes)
crud.use('/:dynamicTable', marquee)
crud.use('/:dynamicTable', aboutRoute)
module.exports = crud