const masterMethodServices = require('../services/masterService')
const display = async (req, res) => {
    const { dynamicTab } = req.params
    const columnTab = await masterMethodServices.fetchService(dynamicTab)
    const { status, message, colData } = columnTab

    if (columnTab.status === "success") return res.status(201).json({ message: message, status: status, dataCol: colData })
    return res.status(401).json({ message: message, status: status, colData: colData })
}
const upload = async (req, res) => {
    const { dynamicTab } = req.params
    const titleUpload = await masterMethodServices.uploadService(dynamicTab, req.body)
    const { status, message } = titleUpload
    if (titleUpload.status === "success") return res.status(201).json({ message: message, status: status })

    return res.status(401).json({ message: message, status: status })
}
const update = async (req, res) => {
    const { dynamicTab, id } = req.params

    const titleUpdate = await masterMethodServices.updateService(dynamicTab, id, req.body)
    const { status, message } = titleUpdate
    if (titleUpdate.status === "success") return res.status(201).json({ message: message, status: status })

    return res.status(401).json({ message: message, status: status, })
}
const remove = async (req, res) => {
    const { dynamicTab, id } = req.params

    const titleDelete = await masterMethodServices.deleteService(dynamicTab, id)
    const { status, message } = titleDelete
    if (titleDelete.status === "success") return res.status(200).json({ message: message, status: status })

    return res.status(401).json({ message: message, status: status })
}
module.exports = {
    upload,
    update,
    remove,
    display
}