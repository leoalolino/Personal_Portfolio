const db = require('../config/db');

// FLEXIBLE SEARCH
const getRecordByCol = async (tableName, data) => {
    // If data is just a string/number (like an ID), turn it into an object
    const dataObj = typeof data === 'object' ? data : { id: data };

    const conditions = Object.keys(dataObj)
        .map((key, i) => `${key} = $${i + 1}`)
        .join(' AND '); // Must use AND/OR, never a comma in WHERE

    const values = Object.values(dataObj);
    const query = `SELECT * FROM ${tableName} WHERE ${conditions} LIMIT 1`;

    const result = await db.query(query, values);
    return result.rows[0];
};

// FLEXIBLE UPLOAD
const uploadQueries = async (tableName, data) => {
    const columns = Object.keys(data).join(', ');
    const placeholders = Object.keys(data).map((_, i) => `$${i + 1}`).join(', ');
    const values = Object.values(data);

    const query = `INSERT INTO ${tableName} (${columns}) VALUES (${placeholders}) RETURNING *`;
    const result = await db.query(query, values);
    return result.rows[0];
};

// FLEXIBLE UPDATE
const updateQueries = async (tableName, id, data) => {
    const setClause = Object.keys(data)
        .map((key, i) => `${key} = $${i + 1}`)
        .join(', '); // Use commas for SET, never 'OR'

    const values = [...Object.values(data), id];
    // id is the last value, so its index is values.length
    const query = `UPDATE ${tableName} SET ${setClause} WHERE id = $${values.length} RETURNING *`;

    const result = await db.query(query, values);
    return result.rows[0];
};
// FLEXIBLE DELETE
const deleteQueries = async (tableName, id) => {
    // We use RETURNING * so we can tell the user exactly what was deleted
    const query = `DELETE FROM ${tableName} WHERE id = $1 RETURNING *`;
    const result = await db.query(query, [id]);
    return result.rows[0];
};

module.exports = {
    getRecordByCol,
    uploadQueries,
    updateQueries,
    deleteQueries // Add this to exports
};