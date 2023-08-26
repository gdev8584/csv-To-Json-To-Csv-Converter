const csvToJson = require("csvtojson")
const {writeFile} = require("fs/promises")
const {parse} = require("json2csv")
const moment = require("moment")

async function csvConverter(data) {
    const jsonData = await csvToJson().fromFile(data)
    const array = []
    for(let i of jsonData){
        i.age = parseInt(i.age)
        i.income = parseInt(i.income)
        i.dob = moment(i.dob, 'D/M/YYYY').format('YYYY-MM-DD');
        array.push(i)
    }
    const csvOutput = array.map(item => ({...item}))
  
      const csvFields = [
        "name", "phone", "address", "email", "age", "income", "dob"
      ];
  
      const csvOutputString = parse(csvOutput, { fields: csvFields });
  
      await writeFile('output.csv', csvOutputString);
        return {message: "converted"}
}
module.exports = { csvConverter };
