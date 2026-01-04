const {
    getRecordByCol,
    uploadQueries,
    updateQueries,
    deleteQueries,

} = require('../helpers/dbQueries');

const uploadService = async (label) => {
    const exist = await getRecordByCol('marquees', 'label', label);
    if (exist) {
        return {
            message: "marquee label already exist",
            status: "failed"
        }
    }

    await uploadQueries('marquees', label)

    return {
        message: "successfully uploaded marquee label",
        status: "success"
    }
}

const updateService = async (id, label) => {
    const exist = await getRecordByCol('marquees', label);
    if (!exist) {
        return {
            message: "faild to update couldn't find marquee label",
            status: "failed"
        }
    }

    await updateQueries('marquees', [id, label])

    return {
        message: "successfully updated marquee label",
        status: "success"
    }
}
const deleteService = async (req, res) => {

}
module.exports = {
    uploadService,
    updateService,
    deleteService
}