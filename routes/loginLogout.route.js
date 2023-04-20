const express = require('express');
const router = express.Router();
// import controllers
const {
    login,
    logout
} = require('../controllers/loginLogout.controller')

// router.use((req, res, next) => {
//     if (req.session.user) {
//         next();
//     } else {
//         res.redirect('/login');
//     }
// })

router.get('/signup', (req, res) => {
    res.render('signup');
});
router.get('/', (req, res) => {
    console.log('getting the login page');
    res.render('login');
});
router.post('/', login);
router.get('/logout', logout);

module.exports = router;