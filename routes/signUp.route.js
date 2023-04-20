const express = require('express');
const router = express.Router();
const {
    signUp
} = require('../controllers/signup.controller');

const {
    validate
} = require('../middlewares/validate');
const validation = require('../validations/user.validator');

router.get('/', (req, res) => {
    res.render('signup');
});

router.post('/', validation.create(), validate, signUp);

module.exports = router;