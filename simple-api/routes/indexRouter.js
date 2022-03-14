const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /index:
 *  get:
 *   description: Check that server is still running.
 *   responses:
 *    '200':
 *     description: Response successfully.
 */
router.get("/", (req, res) => {
    res.json({
        msg: "Server is working!"
    });
});


module.exports = router;