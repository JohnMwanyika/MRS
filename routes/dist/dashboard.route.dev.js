"use strict";

var express = require('express');

var router = express.Router();

var _require = require('../controllers/dashboard.controller'),
    getDashboard = _require.getDashboard,
    newlyCreatedMails = _require.newlyCreatedMails,
    getUsers = _require.getUsers,
    updateUser = _require.updateUser,
    toggleStatus = _require.toggleStatus,
    getAllResetRequests = _require.getAllResetRequests,
    passwordReset = _require.passwordReset,
    ownPasswordReset = _require.ownPasswordReset,
    importMails = _require.importMails,
    getImportForm = _require.getImportForm;

var multer = require('multer'); // ##################### Begging Multer #####################################


var storage = multer.diskStorage({
  // set destination folder where uploaded files will be stored
  destination: function destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function filename(req, file, cb) {
    // Set the file naming convention
    var uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop());
  }
});
var upload = multer({
  storage: storage
}); // ##################### Ending  Multer #####################################

router.get('/', getDashboard);
router.get('/requests', function (req, res) {
  res.render('requests');
});
router.get('/new_mails', newlyCreatedMails);
router.get('/users', getUsers);
router.post('/users/:userId', updateUser);
router.get('/switch-state', function (req, res) {
  res.json({
    data: true
  });
}); // this will toggle between Actvation and deactivation of user account

router.post('/users/update_status/:userId', toggleStatus); // this lists all reset requests

router.get('/reset_mails', getAllResetRequests); // route for Super Admin to reset user password

router.post('/users/reset_password/:userId', passwordReset); // route for changing the currently logged in user

router.post('/reset_password/:userId', ownPasswordReset); // route to get the import form

router.get('/imports', getImportForm); // router to post the imported data

router.post('/import-mails', upload.single('file'), importMails);
module.exports = router;