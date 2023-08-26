const {csvConverter} = require("../service/csvConverterService")

async function  getCSVNow(req,res) {
    const {csvFile} = req.body
    const response = await csvConverter(csvFile)
    res.send(response.message)
}
module.exports = {getCSVNow}