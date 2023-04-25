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
    // if(req.query.error === 'invalid_credentials'){
    //     return 'Invalid username or password'
    // }else{
    //     return ''
    // }
    const errorMessage =
        req.query.error === 'invalid_credentials' ? 'Invalid username or password' :
        req.query.error === 'no_user' ? 'No user found under that username' :
        req.query.error === 'no_session' ? 'System has been idle for more than 30 minutes you need to log in to create your session' :
        "";
    console.log(errorMessage);
    res.render('login', {
        errorMessage
    });
});
router.post('/', login);
// router.get('/logout', logout);

module.exports = router;