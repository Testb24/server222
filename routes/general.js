/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();

const generalCtrl = require('../controllers/general');
// const auth = require('../middleware/auth');

router.get('/server', generalCtrl.statServer);
// router.post('/server', generalCtrl.createStatServer);
router.get('/:id', generalCtrl.statPlayer);
router.put('/:id', generalCtrl.majStatPlayer);
// router.post('/login', userCtrl.login);

module.exports = router;