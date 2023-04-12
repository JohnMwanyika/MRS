var express = require('express');
var router = express.Router();
const person = require('./person.router.');

const {
  home
} = require('../controllers/mail.controller')

router.use('/person', person);
/* GET home page. */
router.get('/', home);


module.exports = router;