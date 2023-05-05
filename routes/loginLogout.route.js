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
    const successMessage = req.query.success === 'user_created' ? 'User created successfully login to your account' : ''
    const errorMessage =
        req.query.error === 'invalid_credentials' ? 'Invalid username or password' :
        req.query.error === 'no_user' ? 'No user found under that username' :
        req.query.error === 'no_session' ? 'System has been idle for more than 30 minutes you need to log in to create your session' :
        req.query.error === 'inactive' ? 'Your account is inactive contact Administrator for activation' :
        "";
    console.log(errorMessage);
    res.render('login', {
        errorMessage,
        successMessage
    });
});
router.post('/', login);
// router.get('/logout', logout);

module.exports = router;