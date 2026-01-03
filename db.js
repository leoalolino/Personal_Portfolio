const { Pool } = require('pg')
const db = new Pool({
    user: "leo",
    host: "localhost",
    database: "webport",
    port: "5432"
})

const webport = async () => {

    await db.query(`CREATE TABLE IF NOT EXISTS projects(
        id SERIAL PRIMARY KEY,
        img TEXT ,
        title TEXT, 
        description TEXT,
        stacks TEXT[],
        viewBtn TEXT,
        ghBtn TEXT
    )`).then(() => {
        console.log('projets table created!');
    }).catch((err) => {
        console.log('failed to create projects table due to: ', err);
    });

    await db.query(`CREATE TABLE IF NOT EXISTS techstacks(
        id SERIAL PRIMARY KEY,
        techstack_name TEXT, 
        img TEXT
    )`).then(() => {
        console.log('techstack table created!')
    }).catch((err) => {
        console.log('failed to create techstack table due to: ', err);
    });

    await db.query(`CREATE TABLE IF NOT EXISTS activities(
        id SERIAL PRIMARY KEY,
        title TEXT,
        description TEXT
    )`).then(() => {
        console.log('activities table created!')
    }).catch((err) => {
        console.log('failed to create activities table due to: ', err);
    });

    await db.query(`CREATE TABLE IF NOT EXISTS attributes(
        id SERIAL PRIMARY KEY,
        traits TEXT,
        about_me TEXT
    )`).then(() => {
        console.log('attributes table created!')
    }).catch((err) => {
        console.log('failed to create attributes table due to: ', err);
    });

    await db.query(`CREATE TABLE IF NOT EXISTS selfs(
        id SERIAL PRIMARY KEY,
        name TEXT,
        bio TEXT,
        profile TEXT
    )`).then(() => {
        console.log('selfs table created!')
    }).catch((err) => {
        console.log('failed to create selfs table due to: ', err);
    });

    await db.query(`CREATE TABLE IF NOT EXISTS navs(
            id SERIAL PRIMARY KEY, 
            name TEXT
        )`).then(() => {
        console.log('navs table created');
    }).catch((err) => {
        console.log('faild to create navs table due to: ', err);
    })
}

webport()

module.exports = db