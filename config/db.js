const { Pool } = require('pg')
require('dotenv').config();

const db = new Pool({
    user: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
})

const WebPortTables = async () => {

    // CREATE NAVBAR TABLE 
    const navbarTab = await db.query(`CREATE TABLE IF NOT EXISTS navbars(
            id SERIAL PRIMARY KEY,
            label TEXT UNIQUE,
            url TEXT
        )`);

    if (!navbarTab) throw new Error('failed to create navTab');

    const Marquee = await db.query(`CREATE TABLE IF NOT EXISTS Marquees(
            id SERIAL PRIMARY KEY,
            label TEXT UNIQUE
        )`)

    if (!Marquee) throw new Error('failed to create hero Table')

}

WebPortTables()

module.exports = db