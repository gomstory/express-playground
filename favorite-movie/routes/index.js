var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.all("/auth", function(req, res, next) {
  res.render("index", { title: "Hello Title"});
})

module.exports = router;
