const express = require('express')
const crud = express.Router()
const { upload, update, remove, display } = require('../controller/conditionController')

crud.get('/:dynamicTab/display', display, (req, res) => {
    const { colData } = req.params;

    if (!colData) return console.log('not found coldata')

    return {
        dataSet: colData
    }
})
crud.post('/:dynamicTab/create', upload)
crud.put('/:dynamicTab/update/:id', update)
crud.delete('/:dynamicTab/delete/:id', remove)
module.exports = crud
