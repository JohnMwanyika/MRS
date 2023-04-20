const express = require('express');
const router = express.Router();
const {
    signUp
} = require('../controllers/signup.controller');

router.get('/', (req, res) => {
    res.render('signup');
});

router.post('/', signUp);

module.exports = router;