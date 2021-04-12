const express = require("express");
const router = express.Router();
const Posts = require("../modals/Posts");

router.get("/", (req, res) => {
    res.send("we're in home");
});

router.post("/", (req, res) => {
    console.log(req.body);
})

module.exports = router;