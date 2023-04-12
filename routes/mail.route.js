const express = require('express');
const router = express.Router();
const { createMail, getMailById, getAllMail, getMailByName, resetPass, requestNewMail } = require('../controllers/mail.controller');

router.post('/', createMail);
router.get('/:id', getMailById);
router.get('/', getAllMail);
router.post('/user', getMailByName);
router.post('/reset', resetPass);
router.post('/request', requestNewMail);

module.exports = router;