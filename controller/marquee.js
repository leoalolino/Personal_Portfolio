const marqueeMethodServices = require('../services/marqueeServices')

const upload = async (req, res) => {
    const { label } = req.body

    const labelUploaded = await marqueeMethodServices.uploadService(label)
    const { status, message } = labelUploaded

    if (labelUploaded.status === "success") return res.status(201).json({ message: message, status: status })

    return res.status(400).json({ message: message, status: status })
}
const update = async (req, res) => {
    const { id, label } = req.body

    const exist = await marqueeMethodServices.updateService(id, label)
    const { status, message } = exist

    if (exist) return res.status(201).json(status, message)

    return res.status(400).json(message, status)
}
const remove = async (req, res) => {

}
module.exports = {
    upload,
    update,
    remove
}