import mysql from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config()

let connectDB

const db = async () => {
    if (!connectDB) {
        try {
            connectDB = await mysql.createConnection({
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                waitForConnections: true,
                queueLimit: 0,
            })
            console.log('Connected to the database');
        } catch (error) {
            console.error(`Error connecting to the database: ${error}`)
            throw error
        }
    }
    return connectDB
}

export default db