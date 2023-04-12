var express = require('express');
var router = express.Router();
const person = require('./person.router.');

router.use('/person', person);
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('home', { title: 'Express' });
  // res.render('index', { title: 'Express' });
});


module.exports = router;
