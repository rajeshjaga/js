const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const postRoutes = require("./routes/posts.js");
//routes

app.use("/posts", postRoutes);
//connecting to db
mongoose.connect(
    process.env.DB_Connection, { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("connected");
    },
);

//listenings
app.listen(3000);