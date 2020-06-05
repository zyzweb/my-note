const express = require('express')
const app = express()
const path = require('path')
const port = 8888

app.use(express.static('public'))
app.get('*', (req,res) => {
    let indexHtmlPath = path.join(__dirname, 'public', 'index.html')
    res.sendFile(indexHtmlPath)
})

app.listen(port, () => console.log(`Example app listening on port ${port}`))
