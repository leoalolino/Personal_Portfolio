const {
    getRecordByCol,
    uploadQueries,
    updateQueries,
    deleteQueries
} = require('../helpers/dbQueries');

const uploadService = async (tableName, body) => {
    try {
        const exist = await getRecordByCol(tableName, body)
        const obj = Object.keys(body).map((x) => x).join(', ');

        if (exist) return {
            message: `failed to upload ${obj} already exist`,
            status: "failed"
        }

        await uploadQueries(tableName, body);

        return { message: `successfully uploaded ${obj}! `, status: "success" }
    }
    catch (e) {
        throw new Error(e.message)
    }
}
const updateService = async (tableName, id, body) => {
    try {
        const obj = Object.keys(body).map((x) => x).join(', ');

        const target = await getRecordByCol(tableName, id);
        if (!target) return { message: "Failed to update: ID not found", status: "failed" };

        await updateQueries(tableName, id, body);
        return { message: `Successfully updated ${obj}`, status: "success" };
    }
    catch (e) {
        throw new Error(e.message)
    }
}
const deleteService = async (tableName, id) => {
    try {

    }
    catch (e) {
        throw new Error(e.message)
    }
}
module.exports = {
    uploadService,
    updateService,
    deleteService
}
