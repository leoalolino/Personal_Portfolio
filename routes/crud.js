const express = require('express')
const crud = express.Router()
const { upload, update, remove } = require('../controller/conditionController')

crud.post('/:dynamicTab/create', upload)
crud.put('/:dynamicTab/update/:id', update)
crud.delete('/:dynamicTab/delete/:id', remove)
module.exports = crud
