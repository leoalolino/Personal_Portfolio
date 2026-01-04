const db = require('../config/db');

const Create = async (label, url) => {
    const checker = 'SELECT * FROM navbars WHERE label = $1'
    const valueChecker = [label]
    const result = await db.query(checker, valueChecker);
    const exist = result.rows[0];

    if (!exist) {
        const query = 'INSERT INTO navbars (label, url) VALUES ($1, $2) ON CONFLICT (label) DO NOTHING';
        const values = [label, url];
        await db.query(query, values)
        return {
            message: 'successfully created label',
            status: 'success'
        };
    }

    return {
        message: 'label already existed',
        status: 'failed'
    };
}

const Update = async (id, label, url) => {
    const checker = 'SELECT * FROM navbars WHERE id = $1'
    const valueChecker = [id]
    const result = await db.query(checker, valueChecker);
    const exist = result.rows[0];

    if (exist) {
        const query = `
            UPDATE navbars SET label = COALESCE($1, label),
            url = COALESCE($2, url) WHERE id = $3
        `
        const values = [label, url, id]

        await db.query(query, values)
        return {
            message: 'successfully updated label',
            status: "success"
        }
    }

    return {
        message: "label doesn't exist",
        status: "failed"
    }

    // YAW KALIMOT UG ADD UG VALUE CHECKER IF SAME BA ANG VALUE NILA D DAYUN MAG CHANGE
}

const Delete = async (id) => {
    const checker = 'SELECT * FROM navbars WHERE id = $1'
    const valueChecker = [id]
    const result = await db.query(checker, valueChecker);
    const exist = result.rows[0];

    if (exist) {
        const query = `DELETE from navbars WHERE id = $1`
        const value = [id]
        await db.query(query, value)

        return { message: "successfuly deleted label", status: "success" }

    }
    return {
        message: "could not delete label", status: "failed"
    }
}

module.exports = {
    Create,
    Update,
    Delete,
}