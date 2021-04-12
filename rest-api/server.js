//declarations
require('dotenv').config();
console.clear();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_SERVER, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => { console.error(error) })
db.once('open', () => { console.log('server connected') })


app.listen(3000, () => console.log('server'));