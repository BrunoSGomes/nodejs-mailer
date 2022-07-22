import express from 'express'
import { emailRoutes } from '../usecase/email/router.js'
import dotenv from 'dotenv'

dotenv.config({ path: './src/.env' })

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/email', emailRoutes)

app.get('/', (req, res) => {
    res.status(200).json({ message: `hello, i'm running on port ${process.env.PORT} :)` })
})

export default app