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
    const errorMessage =
    req.query.error === 'user_exists' ? 'User with similar email already exist' :
    req.query.error === 'not_member' ? 'Oops signup failed!, This platform is only accessible to the TaitaTaveta county staff, if you think this is a mistake contact the Administrator ASAP.' :
    '';
    res.render('signup',{errorMessage});
});

router.post('/', validation.create(), validate, signUp);

module.exports = router;