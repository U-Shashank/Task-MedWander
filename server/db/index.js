const dotenv = require('dotenv')
const Pool = require('pg').Pool

dotenv.config()

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL
})

module.exports = pool
