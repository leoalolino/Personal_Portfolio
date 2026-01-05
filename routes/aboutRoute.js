const express = require('express')
const about = express.Router()
const { upload, update, remove } = require('../controller/about')

about.post('/create', upload)
about.put('/update/:id', update)
about.delete('/delete/:id', remove)
console.log('about route working')
module.exports = about