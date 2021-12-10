/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
// const auth = require('../middleware/auth');
// const authGroup = require('../middleware/authGroup');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;