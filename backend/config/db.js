const { Pool } = require('pg')
require('dotenv').config()

const db = new Pool({
    user: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
})

const WebPortTables = async () => {
    try {
        const techstacks = await db.query(`
    CREATE TABLE IF NOT EXISTS techstacks (
        id SERIAL PRIMARY KEY,
        frontend_img TEXT,
        frontend TEXT,
        backend TEXT,
        backend_img TEXT,
        database TEXT,
        database_img TEXT,
        tool TEXT,
        tool_img TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
`)
        if (!techstacks) throw new Error('failed to create techstack table');

        const projects = await db.query(`
    CREATE TABLE IF NOT EXISTS projects (
        id SERIAL PRIMARY KEY,
        project_img TEXT,
        project_type TEXT,
        title TEXT,
        short_description TEXT,
        description TEXT,
        purposes TEXT,
        usedtech TEXT,
        live_url TEXT,
        github_link TEXT,
        target_audience TEXT,
        featured TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
`)
        if (!projects) throw new Error('failed to create projects table');

        const certificates = await db.query(`
    CREATE TABLE IF NOT EXISTS certificates(
        id SERIAL PRIMARY KEY,
        display_img TEXT,
        title TEXT,
        issued_by TEXT,
        received_at TIMESTAMP,
        verification_url TEXT,
        certificate_img TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
`)
        if (!certificates) throw new Error('failed to create certificates table')

        const experiences = await db.query(`
    CREATE TABLE IF NOT EXISTS experiences(
        id SERIAL PRIMARY KEY,
        company_name TEXT,
        company_logo TEXT,
        job_title TEXT,
        responsibilities TEXT,
        start_date TIMESTAMP,
        end_date TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
`)
        if (!experiences) throw new Error('failed to create experience table')

        const email = await db.query(`
    CREATE TABLE IF NOT EXISTS emails(
        id SERIAL PRIMARY KEY,
        email TEXT,
        message TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
`)
        if (!email) throw new Error('failed to create emails table')

        const users = await db.query(`
    CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        username TEXT,
        password TEXT,
        is_admin BOOLEAN,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
`)

        if (!users) throw new Error('failed to create users table')
    }

    catch (e) {
        throw e
    }
}

WebPortTables()

const recreate = async () => {
    try {
        const tables = await db.query(
            `
            DROP TABLE IF EXISTS techstacks;
            DROP TABLE IF EXISTS projects;
            DROP TABLE IF EXISTS certificates;
            DROP TABLE IF EXISTS experiences;
            DROP TABLE IF EXISTS emails;
            DROP TABLE IF EXISTS users;
        `
        )

        if (!tables) throw new error('failed to drop tables')
    }
    catch (e) {
        throw e
    }
}

// recreate()


module.exports = db