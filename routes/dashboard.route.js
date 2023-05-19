const express = require('express');
const router = express.Router();

const {
    getDashboard,
    newlyCreatedMails,
    getUsers,
    updateUser,
    toggleStatus,
    getAllResetRequests,
    passwordReset,
    ownPasswordReset,
    importMails
} = require('../controllers/dashboard.controller');

const multer = require('multer');
// ##################### Begging Multer #####################################

const storage = multer.diskStorage({
    // set destination folder where uploaded files will be stored
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        // Set the file naming convention
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop())
    }
});

const upload = multer({
    storage: storage
})

// ##################### Ending  Multer #####################################

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
router.post('/users/reset_password/:userId', passwordReset);
// route for changing the currently logged in user
router.post('/reset_password/:userId', ownPasswordReset);
// route to get the import form
router.get('/imports', (req, res) => {
    res.render('importForm', {
        user: req.session.user,
        title: 'Import Mails'
    });
});
// router to post the imported data
router.post('/import-mails', upload.single('file'), importMails);

module.exports = router;