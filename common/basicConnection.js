const { Pool } = require('pg');
var $pgSql = require('../conf/database');

const pool = new Pool($pgSql.pgSql);

module.exports = { 
    query: function(text, res) {
        var resObj = {};
        pool.connect().then(client => {
            return pool.query(text).then(result => {
                resObj = {
                    code: '0',
                    dataArry: result.rows
                }
                res.send(resObj);
                client.release();
            }).catch(e => {
                resObj = {
                    code: '-1',
                    data: 'error'
                }
                res.send(resObj);
                client.release()
            })
        }).catch(e => {
            console.log(e.stack);
        })
    },
    loginPost: function(text, value, res) {
        var resObj = {};
        pool.connect().then(client => {
            return pool.query(text, value).then(result => {
                console.log('result', result);
                if (result.rowCount > 0) {
                    resObj = {
                        code: '0',
                        message: 'success'
                    }
                }else {
                    resObj = {
                        code: '101',
                        message: 'login failed'
                    }
                }
                res.send(resObj);
                client.release();
            }).catch(e => {
                resObj = {
                    code: '-1',
                    data: 'error'
                }
                res.send(resObj);
                client.release()
            })
        }).catch(e => {
            console.log(e.stack);
        })
    }
}