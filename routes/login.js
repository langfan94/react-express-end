var express = require('express');
var router = express.Router();
var loginFn = require('../dao/login');

router.post('/loginer', loginFn.loginer);


module.exports = router;