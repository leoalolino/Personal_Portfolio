const express = require('express')
const marquee = express.Router()
const { upload, update, remove } = require('../controller/marquee')

marquee.post('/create', upload)
marquee.put('/update/:id', update)
marquee.delete('/delete/:id', remove)
console.log('marquee routes works now')

module.exports = marquee