const https = require('https');
const fs = require('fs');
console.clear()
// https.createServer()
https.get('https://www.google.com/', (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);
    res.setEncoding('utf8')
    res.on('data', (d) => {
        fs.writeFile('new.html', d)
    });

}).on('error', (e) => {
    console.error(e);
});