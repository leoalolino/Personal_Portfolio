const marqueeMethodServices = require('../services/marqueeServices')

const upload = async (req, res) => {
    const body = req.body

    const labelUploaded = await marqueeMethodServices.uploadService(body)
    const { status, message } = labelUploaded

    if (labelUploaded.status === "success") return res.status(201).json({ message: message, status: status })

    return res.status(400).json({ message: message, status: status })
}
const update = async (req, res) => {
    const body = req.body
    const { id } = req.params

    const exist = await marqueeMethodServices.updateService(id, body)
    const { status, message } = exist

    if (exist.status === 'success') return res.status(201).json({ message: message, occured: status })

    return res.status(400).json({ message: message, occured: status })
}

const remove = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await marqueeMethodServices.deleteService(id);
        const { status, message } = result;

        if (status === 'success') {
            return res.status(200).json({ message: message, status: status });
        }

        return res.status(404).json({ message: message, status: status });
    } catch (error) {
        // Catch-all for database crashes
        return res.status(500).json({ message: error.message, status: "error" });
    }
};
module.exports = {
    upload,
    update,
    remove
}