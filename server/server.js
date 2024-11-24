import express, { urlencoded } from 'express'
import cors from 'cors'
import db from '../database/db.js'
import router from '../routes/router.js'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config()

const server = express()
const port = process.env.PORT || 3000

server.use(express.json())
server.use(urlencoded({ extended: true }))
server.use(cors({ origin: '*' }))

server.use('/', router)

server.listen(port, () => {
    db()
    console.log(`Server is running on port ${port}`)
})