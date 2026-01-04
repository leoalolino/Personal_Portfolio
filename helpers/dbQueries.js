const db = require('../config/db');

const getRecordByCol = async (tableName, column, value, id) => {
    const query = `SELECT * FROM ${tableName} WHERE ${column} = $1`;
    const result = await db.query(query, [value]);
    return result.rows[0];
};

// dbQueries.js
const uploadQueries = async (tableName, column) => {
    // You MUST tell Postgres which column names to fill
    const query = `INSERT INTO ${tableName} (label) VALUES ($1) RETURNING *`;
    const result = await db.query(query, [column]); // Only use the 1st slot for now
    return result.rows[0];
};

const updateQueries = async (tableName, id, column) => {
    const query = `UPDATE ${tableName} (label) SET ${column} = $1 WHERE ${id} = $2`
    const result = await db.query(query, [column, id])
    return result.rows[0];
}

const deleteQueries = async (label) => {

}
module.exports = { getRecordByCol, uploadQueries, updateQueries, deleteQueries };

const truncate = async () => {
    await db.query(`TRUNCATE TABLE marquees`)
    console.log('successfully truncate tables from dbQueries')
}

// truncate()


