const express = require('express');
const router = express.Router();

const {
    getDashboard,
    newlyCreatedMails,
    getUsers,
    updateUser,
    toggleStatus,
    getAllResetRequests,
    passwordReset
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

router.post('/users/:userId', updateUser);

router.get('/switch-state', (req, res) => {
    res.json({
        data: true
    })
});

// this will toggle between Actvation and deactivation of user account
router.post('/users/update_status/:userId', toggleStatus);
// this lists all reset requests
router.get('/reset_mails', getAllResetRequests);
// route for Super Admin to reset user password
router.post('/dashboard/users/reset_password', passwordReset);

module.exports = router;