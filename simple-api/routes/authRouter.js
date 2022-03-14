const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /auth/user:
 *  get:
 *   description: Authentication
 *   responses:
 *    '200':
 *     description: Response successfully.
 *    '401':
 *     description: User un-authorized
 */
router.get('/user', (req, res, next) => {
    res.status(401).json("un-authorized");
})

module.exports = router;