var express = require("express");
var router = express.Router();

// respond with "hello world" when a GET request is made to the homepage
router.get('/testAPI', function (req, res) {
  res.send('API is working')
})
module.exports = router;