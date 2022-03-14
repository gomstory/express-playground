const express = require('express');
let router = express.Router();

router.param("userId", (req, res, next) => {
    console.log('find user infomation from database first then pass it to route');
    res.locals.userProfile = {id: 1234, name: 'Jhone', lastname: "Chater" };
    next();
})

// local middlewere, user only in user router module.
router.use('/', (req, res, next) => {
    console.log('Runs only on user module');
    next();
})

router.get("/all", (req, res, next) => {
    res.json({
        users: [1,2,3,4,5]
    })
})

router.get("/:userId", (req, res, next) => {
    res.json({
        userId: req.params.userId,
        userProfile: res.locals.userProfile
    });
})


// export to main module to call.
module.exports = router;