var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/test1', function(req, res, next) {
  res.send('respond with a resource1');
});

router.get('/test2', function(req, res, next) {
  res.send('respond with a resource2');
});

router.get('/test3', function(req, res, next) {
  res.send('respond with a resource3');
});

router.get('/test4', function(req, res, next) {
  res.send('respond with a resource4');
});


module.exports = router;
