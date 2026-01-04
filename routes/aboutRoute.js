const express = require('express')
const { upload } = require('../controller/marquee')
const about = express.Router()

about.put('/upload', upload)
console.log('about route working')
module.exports = about