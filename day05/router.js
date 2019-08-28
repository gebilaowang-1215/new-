// 接口编写文件
var express = require('express');
// var app = express();
var router = express.Router();
router.get(('/news'), (req, res) => {
    if (req.query.username == data.username && req.query.password == data.password) {
        var result = [{ 'username': 'tom', 'age': 10 }];
        res.send({ 'success': 'ok', 'data': result })
    } else {
        res.send({ 'error': '用户名错误' })
    }
});
exports.router = router;