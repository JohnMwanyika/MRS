var express = require('express');
var router = express.Router();
const person = require('./person.router.');

const {
  home
} = require('../controllers/mail.controller')

router.use('/person', person);
/* GET home page. */
router.get('/', home);

// router.get('/', function (req, res, next) {
//   res.render('home', {
//     title: 'Express'
//   });
// });


module.exports = router;