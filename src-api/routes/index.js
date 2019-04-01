var express = require('express');
var router = express.Router();
const Mongo = require('mongodb-curd');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.post('/api/getlist', function(req, res, next) {
    Mongo.find('zhoukao', 'list', (result) => {
        if (result) {
            res.send({ code: 1, data: result })
        } else {
            res.send({ code: 0, msg: "error" })
        }
    })
});
router.post('/api/getlistImg', function(req, res, next) {
    Mongo.find('zhoukao', 'listimg', (result) => {
        if (result) {
            res.send({ code: 1, data: result })
        } else {
            res.send({ code: 0, msg: "error" })
        }
    })
});


module.exports = router;