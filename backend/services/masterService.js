const {
    getRecordByCol,
    fetchQueries,
    uploadQueries,
    updateQueries,
    deleteQueries
} = require('../helpers/dbQueries');
const fetchService = async (tableName) => {
    try {
        const result = await fetchQueries(tableName)
        const { message, status, dataRow } = result
        if (result.status === "success") {
            return {
                message: message,
                status: status,
                colData: dataRow
            }
        }
        return {
            message: 'failed to retrieve datas',
            status: 'failed',
            colData: dataRow
        }
    }
    catch (e) {
        console.error(e);
        throw new Error(e.message);
    }
}
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
        const target = await getRecordByCol(tableName, id)
        if (!target) return { message: "Failed to delete: ID not found", status: "failed" };

        await deleteQueries(tableName, id);
        return { message: `Successfully deleted ${id}`, status: "success" };
    }
    catch (e) {
        throw new Error(e.message)
    }
}
module.exports = {
    fetchService,
    uploadService,
    updateService,
    deleteService
}
