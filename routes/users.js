var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/', function(req, res, next) {
  Clog.find({}, function(err, clogs) {
    if (err) return res.status(400).send(err);
    // res.send(items);
    res.send(clogs);
  });
});

router.post('/', function(req, res, next) {
  Clog.create({}, function(err, clogs) {
    if (err) return res.status(400).send(err);
    // res.send(items);
    res.send();
  });
});

module.exports = router;
