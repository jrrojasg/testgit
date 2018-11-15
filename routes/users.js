var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/hotfix', function(req, res, next) {
  res.send('respond with a resourcehotfix');
});



module.exports = router;
