const Excel = require('exceljs');
const pool = require('../db');

const updateExcel = async (req, res, next) => {
try {
    const {rows} = await pool.query('SELECT * FROM users')

    let workbook = new Excel.Workbook()

    const sheet = workbook.addWorksheet("books")
    sheet.columns = [
        {header : "ID", key:"id", width: 10},
        {header : "Name", key:"name", width: 50},
        {header : "Phone Number", key:"phone", width: 25}
    ]

    await rows.map(user => {
        sheet.addRow({id: user.id, name: user.name, phone: user.phone})
    })

    res.setHeader(
        "Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    )
    res.setHeader(
        "Content-Disposition",
        "attachment;filename=" + "users.xlsx"
    )
    const buffer = await workbook.xlsx.writeBuffer();
    res.send(buffer);
} catch (error) {
    console.log(error);
}
    
}

module.exports = updateExcel