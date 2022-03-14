const express = require("express");
const router = express.Router();

router.post("login", (req, res, next) => {
    res.json("login");
})

router.get('/auth', (req, res, next) => {
    res.json("authentication");
})