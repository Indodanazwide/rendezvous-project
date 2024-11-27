import express, { urlencoded } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import db from '../database/db.js'
import router from '../routes/router.js'

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