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

    if (!Marquee) throw new Error('failed to create marquee Table')



    const traits = await db.query(`CREATE TABLE IF NOT EXISTS traits(
            id SERIAL PRIMARY KEY,
            label_pill TEXT,
            expectation TEXT
        )`)

    if (!traits) throw new Error('failed to create traits Table')


    const habitually = await db.query(`CREATE TABLE IF NOT EXISTS habitually(
            id SERIAL PRIMARY KEY,
            title TEXT,
            description TEXT
        )`)

    if (!habitually) throw new Error('failed to create habitually Table')

    const techstacks = await db.query(`CREATE TABLE IF NOT EXISTS techstacks(
            id SERIAL PRIMARY KEY,
            frontend TEXT,
            fontend_img TEXT,
            backend TEXT,
            backend_img TEXT,
            database TEXT,
            database_img TEXT,
            tools TEXT,
            tools_img TEXT
        )`)

    if (!techstacks) throw new Error('failed to create techstacks Table')

    const projects = await db.query(`CREATE TABLE IF NOT EXISTS projects(
            id SERIAL PRIMARY KEY,
            img TEXT,
            title TEXT,
            description TEXT,
            techstack,
            techstack_color,
            live_http_link,
            github_link
        )`)

    if (!projects) throw new Error('failed to create projects Table')

    const certificates = await db.query(`CREATE TABLE IF NOT EXISTS certificates(
            id SERIAL PRIMARY KEY,
            img TEXT,
            title TEXT,
            description TEXT,
            Date Earned
        )`)

    if (!certificates) throw new Error('failed to create certificates Table')
}

// WebPortTables()

module.exports = db