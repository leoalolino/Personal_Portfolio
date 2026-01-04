const methodServices = require('../services/labelServices')
const labelCreate = async (req, res) => {
    const { label, url } = req.body
    const labelExisted = await methodServices.Create(label, url)
    const { status, message } = labelExisted
    if (labelExisted.status === "success") {
        return res.status(201).json({
            message: status,
            occured: message
        });
    }

    return res.status(400).json({
        message: message,
        occured: status
    })
}

const labelUpdate = async (req, res) => {
    const { id } = req.params
    const { label, url } = req.body

    const searchId = await methodServices.Update(id, label, url)
    const { status, message } = searchId
    if (searchId.status === "success") return res.status(201).json({ message: message, occured: status })

    return res.status(401).json({
        message: message,
        occured: status
    })
    // return searchId.status === "success" ? res.status(201).json({ message: message, occured: status }) : res.status(401).json({ message: message, occured: status })
}

const labelDelete = async (req, res) => {
    const { id } = req.params

    const searchLabel = await methodServices.Delete(id)
    const { message, status } = searchLabel
    if (searchLabel === "success") return res.status(201).json({
        message: message,
        occured: status
    })

    return res.status(404).json({
        message: message, occured: status
    })

    // return searchLabel === success ? res.status(201).json({ message: message, occured: status }) : res.status(401).json({
    //     message: message, occured: status
    // });

}

module.exports = {
    labelCreate,
    labelUpdate,
    labelDelete,
}
