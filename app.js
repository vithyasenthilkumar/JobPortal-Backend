require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 3500
const jobsRouter = require('./routes/jobsRouter')
const validateJobsRouter = require('./routes/validateJobsRouter')
const cors = require('cors')
const mongoose = require('mongoose')

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on('error', (errorMessage) => console.log(errorMessage))
db.once('open', () => console.log('Connected successfully to the database..'))

app.use('/api/v1/jobs', jobsRouter)
app.use('/api/v1/jobs/validate', validateJobsRouter)

app.listen(PORT, console.log(`Server listening at http://localhost:${PORT}/api/v1/jobs`))