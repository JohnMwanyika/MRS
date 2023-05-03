const express = require('express');
const router = express.Router();

const {
    getDashboard,
    newlyCreatedMails,
    getUsers,
    updateUser
} = require('../controllers/dashboard.controller');
// middleware to protect authenticated routes
// router.use((req, res, next) => {
//     if (!req.session.user) {
//         return res.redirect('/login')
//     }
//     next();
// })

router.get('/', getDashboard);

router.get('/requests', (req, res) => {
    res.render('requests')
});

router.get('/new_mails', newlyCreatedMails);

router.get('/users', getUsers);

router.post('/users/:userId', updateUser)

module.exports = router