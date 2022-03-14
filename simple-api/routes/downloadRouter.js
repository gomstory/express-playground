const express = require("express");
const router = express.Router();
const path = require("path");


router.get('/', (req, res, next) => {
    res.download(path.join(__dirname, '/public/data.html' ));
})


module.exports = router;