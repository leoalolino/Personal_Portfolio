const {
    getRecordByCol,
    uploadQueries,
    updateQueries,
    deleteQueries
} = require('../helpers/dbQueries');

const uploadService = async (body) => {
    const { title, description } = body

    const exist = getRecordByCol('about', { title, description })
    const { message, status } = exist

    if (exist.status === 'success') return res.status(201).json({
        message: message,
        occured: status
    })

}

