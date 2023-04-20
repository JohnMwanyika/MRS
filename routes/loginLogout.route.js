const express = require('express');
const router = express.Router();
// import controllers
const {
    login,
    logout
} = require('../controllers/loginLogout.controller')


router.get('/signup', (req, res) => {
    res.render('signup');
});
router.get('/', (req, res) => {
    console.log('getting the login page');
    res.render('login');
});
router.post('/', login);
// router.get('/logout', logout);

module.exports = router;