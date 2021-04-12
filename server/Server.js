const express = require('express');
const { readFile } = require('fs')
const app = express();
const PORT = 4000;

app.listen(process.env.PORT || PORT, () => {
    console.log('port is connected to', PORT)
})

app.get('/', (req, res) => {
    readFile('./index.html', 'utf8', (err, data) => {
        if (err) {
            console.log(err)
        }
        res.send(data)
    })
})