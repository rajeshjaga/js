const http = require('http')
const { readFile, writeFileSync } = require('fs')


//creating a server with http
const server = http.createServer((req, res) => {
    //statusCode
    res.statusCode = 200
    //responding with an html file
    readFile('./index.html', 'utf8', (err, data) => {
        if (err) {
            console.log(err)
            res.end()
        }
        res.write(data)
        res.end()
    })
});

//making a http get request from google.co.in
http.get('http:www.google.co.in', (res) => {
    const { statusCode } = res;
    const header = res.headers['Content-Type']
    console.log(statusCode)
    res.setEncoding('utf8')
    res.on('data', (chunk) => {
        writeFileSync('./new.js', chunk, (err) => { console.log(err) })
    })
})


//Init port and listen
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log('Server listening at port', PORT)
});