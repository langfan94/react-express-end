var db = require('../common/basicConnection');

function userInfo(req, res, next) {
    db.query('select * from myApp', res);
}

// function singleUser() {}

module.exports = { userInfo: userInfo }