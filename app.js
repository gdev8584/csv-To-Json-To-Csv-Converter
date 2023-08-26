const express = require('express')
const app = express()
const { getCSVNow } = require('./controllers/CsvController')

app.use(express.json())
app.get('/',(req, res)=>{
    res.send("Hello India how are you!")
})

app.post ('/csv', getCSVNow)

app.listen(3000,"localhost",()=>{
    console.log('app is running')
})