const express = require("express");
const router = express.Router();
const path = require("path");

/**
 * @swagger
 * /download:
 *  get:
 *   description: Server will send a file to client
 *   responses:
 *    '200':
 *     description: Response successfully.
 */
router.get('/', (req, res, next) => {
    res.download(path.join(__dirname, '../public/data.html' ));
})


module.exports = router;