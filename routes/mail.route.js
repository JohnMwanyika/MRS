const express = require('express');
const router = express.Router();

const {
    createMail,
    getMailById,
    getAllMail,
    getMailByName,
    resetPass,
    requestNewMail,
    completeReset,
    checkMail,
    newlyCreatedMails
} = require('../controllers/mail.controller');

router.post('/api/new', createMail);
router.get('/:id', getMailById);
router.get('/', getAllMail);
router.post('/user', getMailByName);
router.post('/reset', resetPass);
router.post('/request', requestNewMail);
router.post('/api/reset', completeReset);
router.post('/api/user', checkMail)
// router.get('/new_mails', newlyCreatedMails);

module.exports = router;