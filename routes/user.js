var express = require('express');
var router = express.Router();
var userInfo = require('../dao/user');

router.get('/userInfo', userInfo.userInfo);

// router.get('/userInfo/?cd', userInfo.singleUser);

module.exports = router;