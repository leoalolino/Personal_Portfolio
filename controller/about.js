const masterMethodServices = require('../services/masterService')

const upload = async (req, res) => {
    const { dynamicTable, id } = req.params
    const titleUpload = await masterMethodServices.uploadService(dynamicTable, req.body)
    const { status, message } = titleUpload
    if (titleUpload.status === "success") return res.status(201).json({ message: message, status: status })

    return res.status(401).json({ message: message, status: status })
}
const update = async (req, res) => {
    const { dynamicTable, id } = req.params

    const titleUpdate = await masterMethodServices.updateService(dynamicTable, id, req.body)
    const { status, message } = titleUpdate
    if (titleUpdate.status === "success") return res.status(201).json({ message: message, status: status })

    return res.status(401).json({ message: message, status: status })
}
const remove = async (req, res) => {
    const { dynamicTable, id } = req.params

    const titleDelete = await masterMethodServices.deleteService(dynamicTable, id)
    const { status, message } = titleDelete
    if (titleDelete.status === "success") return res.status(200).json({ message: message, status: status })

    return res.status(401).json({ message: message, status: status })
}
module.exports = {
    upload,
    update,
    remove
}