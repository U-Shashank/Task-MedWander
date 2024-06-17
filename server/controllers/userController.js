const pool = require('../db')

const createUser = async (req, res) => {
    try {
        const {name, phone, formType} = req.body
        await pool.query('INSERT INTO users (name, phone, formType) VALUES ($1, $2, $3);', [name, phone, formType])
        res.status(201).json({
            success: true,
            msg: 'user created'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Something went wrong"
        })
    }
}

module.exports = createUser