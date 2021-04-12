const express = require("express");
//express app
const app = express();

//listening for requests
app.listen(3000);

app.get("/", (req, res) => {
    res.sendFile('./veiws/index.html', { root: __dirname })
});
app.get("/about", (req, res) => {
    res.sendFile('./veiws/about.html', { root: __dirname })
});
app.get("/about-us", (res, req) => {
    res.redirect('/about');
})
app.use((req, res) => {
    res.sendfile('./veiws/404.html', { root: __dirname })
})