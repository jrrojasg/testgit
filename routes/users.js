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

router.get('/test5', function(req, res, next) {
  res.send('respond with a resource5');
});

router.get('/test6', function(req, res, next) {
  res.send('respond with a resource6');
});

router.get('/test7', function(req, res, next) {
  res.send('respond with a resource7');
});

router.get('/test8', function(req, res, next) {
  res.send('respond with a resource8');
});


module.exports = router;
