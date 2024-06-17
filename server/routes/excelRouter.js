const express = require("express");
const updateExcel = require("../controllers/excelController");

const router = express.Router()

router.route('/').get(updateExcel)

module.exports = router