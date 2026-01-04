const aboutMethodServices = require('../services/aboutServices')

const upload = async (req, res) => {

    const titleUpload = await aboutMethodServices.uploadService(req.body)
    const { status, message } = titleUpload

    if (titleUpload.status === "success") return res.status(201).json({ message: message, status: status })

    return res.status(400).json({ message: message, status: status })
}

module.exports = {
    upload,
}