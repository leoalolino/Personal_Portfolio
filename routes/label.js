const express = require('express')
const label = express.Router()
const { labelCreate, labelUpdate, labelDelete } = require('../controller/navbar')

label.post('/create', labelCreate)
label.put('/update/:id', labelUpdate)
label.delete('/delete/:id', labelDelete)

console.log('label routes working')
module.exports = label