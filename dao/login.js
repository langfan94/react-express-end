var db = require('../common/basicConnection');

function loginer(req, res, next) {
    console.log(req.body);
    var value = [req.body.userName, req.body.password];
    db.loginPost('select * from loginer where account = $1 and password = $2', value, res);
}

module.exports = { loginer: loginer }