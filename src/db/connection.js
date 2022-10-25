import pg from 'pg';
import dotenv from "dotenv";

dotenv.config({path: '.env'});

const { Pool } = pg;

const pgConnection = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 20000,
    ur
});

pgConnection.connect((err) => {
    if (err) {
        console.log("Can't connect to Postgres database: ", err);
    } else {
        console.log('Connected to Postgres database');
    }
});

export default pgConnection;

export const end = () => pgConnection.end();
