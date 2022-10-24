const express = require('express')
const app = express()

app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})

app.all('/test', (req, res) => {
    console.log("Just got a request!")
    res.send('This is a test endpoint')
})

app.listen(process.env.PORT || 3000)
