const express = require('express');
const router = express.Router();
// import controllers
const {
    login,
    logout
} = require('../controllers/loginLogout.controller')

router.post('/login', login);
router.get('/logout', logout);

module.exports = router;