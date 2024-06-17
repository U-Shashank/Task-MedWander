const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

const userRouter = require('./routes/userRouter')
const excelRouter = require('./routes/excelRouter')

const app = express()
dotenv.config()

app.use(cors())
app.use(express.json())

app.use('/api/v1/user', userRouter)
app.use('/api/v1/excel', excelRouter)

const port =  process.env.APP_PORT || 3000

app.listen(port, () => console.log(`listening on port ${port} ...`))



