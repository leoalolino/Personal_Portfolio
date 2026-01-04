const {
    getRecordByCol,
    uploadQueries,
    updateQueries,
    deleteQueries

} = require('../helpers/dbQueries');

const uploadService = async (body) => {
    // Check if it exists by label
    const exist = await getRecordByCol('marquees', { label: body.label });
    if (exist) return { message: "marquee label already exists", status: "failed" };

    // Pass the object { label: "text" } so the helper knows the column name
    await uploadQueries('marquees', { label: body.label });

    return { message: "successfully uploaded marquee label", status: "success" };
};

const updateService = async (id, body) => {
    const target = await getRecordByCol('marquees', { id });
    if (!target) return { message: "Failed to update: ID not found", status: "failed" };

    await updateQueries('marquees', id, { label: body.label });
    return { message: "Successfully updated", status: "success" };
};

// services/marqueeServices.js

const deleteService = async (id) => {
    // 1. Check if it exists first using your flexible searcher
    const target = await getRecordByCol('marquees', { id });

    if (!target) {
        return {
            message: "Failed to delete: ID not found",
            status: "failed"
        };
    }

    // 2. Call the flexible helper
    await deleteQueries('marquees', id);

    return {
        message: "Successfully deleted marquee label",
        status: "success"
    };
};
module.exports = {
    uploadService,
    updateService,
    deleteService
}