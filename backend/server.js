const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./src/routes/routes')
const cors = require('cors')

dotenv.config()

// Connect mongoDB
mongoose.connect(process.env.DATABASE_ACCESS, () => console.log('mongoDB is conected'))

app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)

// Rinning port of db at 4000
app.listen(4000, () => console.log('server is running at port 4000'))